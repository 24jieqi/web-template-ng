import create, { SetState, GetState } from 'zustand';
import { devtools } from 'zustand/middleware';
import routerConfig from '@/router/config/index';
import { generateMenus } from '@/utils/tools';
interface State {
  /** menuList */
  menuList: any[];
  setMenuList: () => void;
}

const useGlobalStore = create<State>(
  devtools((set: SetState<State>, get: GetState<State>) => ({
    menuList: null,
    setMenuList: () => {
      set({
        menuList: getMenuList(routerConfig),
      });
    },
  })),
);
export default useGlobalStore;
const getMenuList = (routes) => {
  return generateMenus(routes, []);
};
