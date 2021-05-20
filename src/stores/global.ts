import create, { SetState, GetState } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import routerConfig from '@/router/config/index';
import { generateMenus } from '@/utils/tools';
interface State {
  /** menuList */
  menuList: any[];
  setMenuList: () => void;
  [key: string]: any;
}

const useGlobalStore = create<State>(
  devtools(
    // 本地存储，其他store不需要
    persist(
      (set: SetState<State>, get: GetState<State>) => ({
        menuList: null,
        setMenuList: () => {
          set({
            menuList: getMenuList(routerConfig),
          });
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
const getMenuList = (routes) => {
  return generateMenus(routes, []);
};
