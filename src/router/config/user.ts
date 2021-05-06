import User from '@/pages/user-module'
import BasicInfo from '@/pages/user-module/basic/base-info'
export interface RouteConfig {
  path: string
  component: React.ComponentType<any>
  children?: RouteConfig[]
}

export default [
  {
    path: 'user',
    component: User,
    children: [
      {
        path: 'basic',
        component: BasicInfo,
      },
    ],
  },
] as RouteConfig[]
