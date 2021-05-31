import loadable from '@loadable/component';
import { RouteConfig } from 'react-router-config';
import routerModule from './router-module';
import Layouts from '@/layouts/commonLayout/index';
import baseModule from './base-module';
export const mainRoutes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    title: '首页',
    component: loadable(() => import('@/pages/home')),
  },
  ...routerModule,
  ...baseModule,
];
const routes: RouteConfig[] = [
  {
    path: '/',
    component: Layouts,
    routes: mainRoutes,
  },
  {
    path: '*',
    meta: {
      hideInMenu: true,
    },
    component: loadable(() => import('@/pages/404')),
  },
];

export default routes;
