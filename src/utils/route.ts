import { matchPath } from 'react-router-dom'
import allRoutes, { CustomRouteConfig } from '@/router/config'

/**
 * 根据路由配置和权限数据获取菜单配置
 * @param routes 路由配置
 * @param authData 权限数据
 */
export const getMenuList = (routes: CustomRouteConfig[], authData: any[]) => {
  return (
    routes
      ?.filter(({ meta, authKey }) => {
        // 如果路由配置了authKey
        if (authKey) {
          // 如果拥有权限
          if (authData.some((item) => item.authKey === authKey)) {
            // 如果路由配置了menuText
            return !!meta?.menuText
          }
          // 无权限
          return false
        }
        // 如果路由没有配置authKey则默认有权限
        return !!meta?.menuText
      })
      .map((item) => ({
        ...item,
        // 递归处理
        routes: getMenuList(item.routes, authData),
      })) || []
  )
}

/**
 * 从菜单中获取默认首页路由（第一个可选菜单项目）
 * @param menuList 菜单列表
 */
export const getHomepageUrl = (menuList: CustomRouteConfig[]) => {
  let menu: CustomRouteConfig = menuList.find((item) => {
    if (item.routes?.length) {
      return getHomepageUrl(item.routes)
    }
    return item.meta?.menuText
  })
  while (menu?.routes?.length) {
    menu = menu.routes[0]
  }
  return Array.isArray(menu?.path) ? menu.path[0] : menu?.path
}
/**
 * 根据pathname匹配路由和菜单
 * @param pathname location.pathname
 * @returns 获取当前路由及菜单信息
 */
export const getCurrentRouteAndMenuInfo = (pathname: string): [CustomRouteConfig, CustomRouteConfig, string[]] => {
  let currentRoute: CustomRouteConfig = null
  let currentMenu: CustomRouteConfig = null
  let openKeys: string[] = []
  const traverse = (menu: CustomRouteConfig[]) => {
    for (let i = 0; i <= menu?.length - 1; i++) {
      const route = menu[i]
      // exact需要为true
      const matchedRoute = matchPath(pathname, { ...route, exact: true })
      if (matchedRoute) {
        currentRoute = route
        if (route.meta?.menuText) {
          currentMenu = route
        }
        return true
      } else {
        if (route.routes?.length) {
          const subResult = traverse(route.routes)
          // 如果子路由被匹配到
          if (subResult) {
            // 如果已获取到当前菜单项则将父菜单的menuText存储到openKeys
            if (currentMenu) {
              route.meta?.menuText && openKeys.push(route.meta.menuText)
            }
            // 如果尚未获取到当前菜单项，则判断当前路由是否有menuText，若有则将route设置为当前菜单项
            if (!currentMenu) {
              route.meta?.menuText && (currentMenu = route)
            }
            return true
          }
        }
      }
    }
    return false
  }
  traverse(allRoutes)
  return [currentRoute, currentMenu, openKeys]
}
