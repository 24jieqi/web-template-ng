import create, { SetState, GetState } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { mainRoutes, CustomRouteConfig } from '@/router/config/index';
import { getMenuList, getHomepageUrl, getCurrentRouteAndMenuInfo } from '@/utils/route';
import { history } from '@/router';
import { BASE_PATH } from '@/router/config/basePath';
import { Modal } from 'antd';

export type State = {
  /** menuList */
  menuList: CustomRouteConfig[];
  /** 是否登录 */
  isLogin: boolean;
  /** 用户id */
  userId: number;
  /** token */
  token: string;
  /** 用户信息 */
  userInfo: {
    /** 用户名 */
    username: string;
    /** 公司名 */
    companyName: string;
  };
  /**
   * 权限是否准备好
   * - fail 获取失败
   * - ok 获取成功
   * - null 初始状态
   * */
  authStatus: 'fail' | 'ok' | 'pending';
  /** 用户设置 */
  userSetting: {
    /** 菜单是否收起 */
    collapsed: boolean;
  };
  setUserSetting: (value: Partial<State['userSetting']>) => void;
  /** 退出 */
  logout: (callback?: () => void) => void;
};
export const name = 'global-storage';
const useGlobalStore = create<State>(
  devtools(
    // 本地存储，其他store不需要
    persist(
      (set: SetState<State>, get: GetState<State>) => ({
        menuList: null,
        isLogin: null,
        userId: null,
        token: null,
        userInfo: {
          companyName: '',
          username: '',
        },
        userSetting: {
          collapsed: null,
        },
        authStatus: null,
        setUserSetting: (value) => {
          set({ userSetting: { ...get().userSetting, ...value } });
        },
        logout: (callback) => {
          set({ isLogin: false });
          callback?.();
        },
      }),
      {
        name,
        getStorage: () => localStorage,
        // only these props will be persisted
        whitelist: ['isLogin', 'userId', 'token', 'userSetting', 'userInfo'],
      },
    ),
  ),
);

useGlobalStore.subscribe(
  (isLogin) => {
    // 登录成功执行操作
    if (isLogin) {
      // 延迟执行（因为此时token可能还未存储到localStorage，请求中拿不到token）
      useGlobalStore.setState({ authStatus: 'pending' });
      setTimeout(() => {
        // TODO:接入API
        new Promise<any>((resolve, reject) => {
          reject(new Error());
        })
          .then((resp) => {
            const [currentRoute] = getCurrentRouteAndMenuInfo(location.pathname);
            const authKeys = resp.data || [];
            let noAuth = false;
            let menuList = [];
            // 如果用户没有当前路由权限
            if (currentRoute.authKey && !authKeys.some((item) => item.authKey === currentRoute.authKey)) {
              noAuth = true;
            } else {
              menuList = getMenuList(mainRoutes, authKeys);
              const homepageUrl = getHomepageUrl(menuList);
              // 若路由处于BASE_PATH，则需要跳转
              if (location.pathname === BASE_PATH) {
                // 获取首页路由（第一个可选中菜单项），若无可跳转路由，则提示无访问权限
                if (homepageUrl) {
                  history.replace(homepageUrl);
                } else {
                  noAuth = true;
                }
              }
            }
            if (noAuth) {
              Modal.info({
                title: '系统提示',
                content: '暂无访问权限',
                okText: '知道了',
                onOk() {
                  history.push('/login');
                },
              });
            }
            useGlobalStore.setState({ authStatus: noAuth ? 'fail' : 'ok', menuList });
          })
          .catch(() => {
            useGlobalStore.setState({ authStatus: 'fail' });
          });
      });
    } else {
      // empty user data
      useGlobalStore.setState({ userId: null, token: null, userInfo: null });
    }
  },
  (state) => state.isLogin,
);

export default useGlobalStore;
