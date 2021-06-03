import intersection from 'lodash/intersection';

export function generateMenus(routes: any[], permission: string[]) {
  return routes
    .filter((v) => {
      // 过滤掉没有权限的：当前菜单的权限与当前用户所有权限没有交集
      return judgePermission(v, permission);
    })
    .map((v) => {
      // 是否有子菜单,也递归生成菜单
      const item = { ...v };
      if (v?.routes?.length > 0) {
        item.routes = generateMenus(item.routes, permission);
      }
      return item;
    });
}

const judgePermission = (menu, permission: string[]) => {
  // 判断是否在菜单中
  if (menu?.meta?.inMenu) {
    return true;
  }

  if (menu?.authority?.length > 0) {
    //   // 判断当前节点是否有权限
    if (intersection(permission, menu?.authority).length > 0) {
      return true;
    } else {
      if (menu?.routes?.length > 0) {
        const res = menu?.routes?.map((v) => {
          return judgePermission(v, permission);
        });

        return res?.filter((v) => v)?.length > 0;
      }
      return false;
    }
  }
  return false;
};

/** 根据routes生成菜单 */
export const getMenuList = (routes) => {
  return generateMenus(routes, []);
};
