import { TeamOutlined } from '@ant-design/icons'
import { lazy } from 'react'

import type { RouteConfig } from '@/utils/router'
import { BASE_PATH, buildRouteSuspense } from '@/utils/router'

export const EMPLOYEE_PATH = `${BASE_PATH}/employee`
export const USER_PATH = `${BASE_PATH}/user`

const EmployeeListPage = buildRouteSuspense(
  lazy(() => import('@/pages/employee/list')),
)
const UserListPage = buildRouteSuspense(
  lazy(() => import('@/pages/employee/user')),
)

const routeConfig: RouteConfig = {
  sort: 1,
  buildRouteFn: () => [
    {
      path: EMPLOYEE_PATH,
      name: '员工管理',
      icon: <TeamOutlined />,
      element: EmployeeListPage,
    },
    {
      path: USER_PATH,
      name: '用户管理',
      icon: <TeamOutlined />,
      element: UserListPage,
    },
  ],
}

export default routeConfig
