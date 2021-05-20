import loadable from '@loadable/component';
import { RouteConfig } from 'react-router-config';
import routerModule from './router-module';
import Layouts from '@/layouts/index';
import baseModule from './base-module';
const routes: RouteConfig[] = [
  {
    path: '/',
    title: '首页',
    exact: true,
    component: Layouts,
    routes: [
      {
        path: '/',
        exact: true,
        title: '首页',
        component: loadable(() => import('@/pages/home')),
      },
    ],
  },
  ...routerModule,
  ...baseModule,
  {
    path: '*',
    meta: {
      hideInMenu: true,
    },
    component: loadable(() => import('@/pages/404')),
  },
];

export default routes;
