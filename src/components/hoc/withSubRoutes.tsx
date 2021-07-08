import React from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'
import { useLocation, matchPath } from 'react-router'

/**
 * 渲染子路由（组件包含子路由时使用）
 * @param Component 含有子路由的组件
 */
function withSubRoutes<T extends RouteConfigComponentProps>(Component: React.FC<T>): React.FC<T> {
  return (props) => {
    const location = useLocation()
    // 若当前组件路由被匹配则渲染当前组件
    if (matchPath(location.pathname, { ...props.route, exact: true })) {
      return <Component {...props} />
    }
    // 否则显示渲染子路由组件
    return renderRoutes(props.route.routes)
  }
}

export default withSubRoutes
