import loadable from '@loadable/component';
import type { RouteConfig } from 'react-router-config';

import Layouts from '@/layouts/commonLayout/index';

const modules = import.meta.globEager('./**/index.ts');
const config: RouteConfig[] = [];

// eslint-disable-next-line guard-for-in
for (const path in modules) {
  config.push(...modules[path].default);
}

export const mainRoutes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    title: '首页',
    component: loadable(() => import('@/pages/home')),
  },
  ...config,
];

const routes: RouteConfig[] = [
  {
    path: '/login',
    exact: true,
    component: loadable(() => import('@/pages/login')),
  },
  {
    path: '/',
    component: Layouts,
    routes: mainRoutes,
  },
  {
    path: '*',
    component: loadable(() => import('@/pages/404')),
  },
];

export default routes;
