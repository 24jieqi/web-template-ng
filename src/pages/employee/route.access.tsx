import { TeamOutlined } from '@ant-design/icons'
import { lazy } from 'react'

import type { RouteConfig } from '@/utils/router'
import { BASE_PATH, buildRouteSuspense } from '@/utils/router'

export const EMPLOYEE_PATH = `${BASE_PATH}/employee`

const EmployeeListPage = buildRouteSuspense(
  lazy(() => import('@/pages/employee/list')),
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
  ],
}

export default routeConfig
