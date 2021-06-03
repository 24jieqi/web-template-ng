import loadable from '@loadable/component';
import type { RouteConfig } from 'react-router-config';

import BlankLayout from '@/layouts/blankLayout/index';
import { BASE1, BASE2, BASE_URL, CHILD_ROUTE2, GRANDCHIND_ROUTE1, GRANDCHIND_ROUTE2 } from './path';

const routes: RouteConfig[] = [
  {
    path: BASE_URL,
    title: '路由',
    component: BlankLayout,
    meta: {
      inMenu: true,
    },
    routes: [
      {
        path: BASE1,
        title: '页面跳转1',
        exact: true,
        meta: {
          inMenu: true,
        },
        component: loadable(() => import('@/pages/router-module/base/1')),
      },
      {
        path: BASE2,
        title: '页面跳转2',
        exact: true,
        meta: {
          inMenu: true,
        },
        component: loadable(() => import('@/pages/router-module/base/2')),
      },
      {
        path: CHILD_ROUTE2,
        title: '深层路由demo',
        meta: {
          inMenu: true,
        },
        component: BlankLayout,
        routes: [
          {
            path: GRANDCHIND_ROUTE1,
            exact: false,
            title: '子孙路由1',
            meta: {
              inMenu: true,
            },
            component: loadable(
              () => import('@/pages/router-module/deep-route/child-route/grandchind-route/grandchind-route'),
            ),
          },
          {
            path: GRANDCHIND_ROUTE2,
            exact: false,
            title: '子孙路由2',
            meta: {
              inMenu: true,
            },
            component: loadable(
              () => import('@/pages/router-module/deep-route/child-route/grandchind-route/grandchind-route2'),
            ),
          },
        ],
      },
    ],
  },
];

export default routes;
