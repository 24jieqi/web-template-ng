import intersection from 'lodash/intersection';
export function generateMenus(routes: any[], permission: string[]) {
  let Menus = routes.filter((v) => {
    let inMenu = true;
    // 过滤掉没有权限的：当前菜单的权限与当前用户所有权限没有交集
    inMenu = judgePermission(v, permission);
    return inMenu;
  });
  // 是否有子菜单,也递归生成菜单
  Menus = Menus.map((v) => {
    let item = { ...v };
    if (v?.routes?.length > 0) {
      item.routes = generateMenus(item.routes, permission);
    }
    return item;
  });
  return Menus;
}

const judgePermission = (menu, permission) => {
  // 判断是否在菜单中
  if (menu?.meta?.hideInMenu) {
    return false;
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
  return true;
};
