import React from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'


const Layout: React.FC<RouteConfigComponentProps> = React.memo((props) => {
  const { route } = props
  return renderRoutes(route?.routes)
})
export default Layout
