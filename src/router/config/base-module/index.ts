import loadable from '@loadable/component';
import type { RouteConfig } from 'react-router-config';

import BlankLayout from '@/layouts/blankLayout/index';

import { BASE1, BASE2, BASE_URL } from './path';

const routes: RouteConfig[] = [
  {
    path: BASE_URL,
    title: '基础管理',
    component: BlankLayout,
    meta: {
      inMenu: true,
    },
    routes: [
      {
        path: BASE1,
        title: '用户管理',
        exact: true,
        meta: {
          inMenu: true,
        },
        component: loadable(() => import('@/pages/base-module/base1/index')),
      },
      {
        path: BASE2,
        title: '权限管理',
        exact: true,
        meta: {
          inMenu: true,
        },
        component: loadable(() => import('@/pages/base-module/base2/index')),
      },
    ],
  },
];

export default routes;
