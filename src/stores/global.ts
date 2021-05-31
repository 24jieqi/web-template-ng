import create, { SetState, GetState } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { mainRoutes } from '@/router/config/index';
import { getMenuList } from '@/utils/tools';
interface State {
  /** menuList */
  menuList: any[];
  setMenuList: () => void;
  /** 是否登录 */
  isLogin: boolean;
  /** token */
  token: string;
  /** 用户信息 */
  userInfo: any;
  /** 退出 */
  logout: () => void;
  [key: string]: any;
}

const useGlobalStore = create<State>(
  devtools(
    // 本地存储，其他store不需要
    persist(
      (set: SetState<State>, get: GetState<State>) => ({
        menuList: null,
        isLogin: null,
        token: null,
        userInfo: null,
        setMenuList: () => {
          set({
            menuList: getMenuList(mainRoutes),
          });
        },
        logout: () => {
          set({ isLogin: false, token: '', userInfo: {} });
        },
      }),
      {
        name: 'global-storage',
        getStorage: () => localStorage,
      },
    ),
  ),
);
export default useGlobalStore;
