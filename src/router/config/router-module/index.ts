import React from 'react';
import loadable from '@loadable/component';
import { BASE1, BASE2, BASE_URL, CHILD_ROUTE1, CHILD_ROUTE2, GRANDCHIND_ROUTE1, GRANDCHIND_ROUTE2 } from './path';
import { RouteConfig } from 'react-router-config';
const routes: RouteConfig[] = [
  {
    path: BASE1,
    title: '页面跳转1',
    exact: true,
    component: loadable(() => import('@/pages/router-module/base/1')),
  },
  {
    path: BASE2,
    title: '页面跳转2',
    exact: true,
    component: loadable(() => import('@/pages/router-module/base/2')),
  },
  {
    path: BASE_URL,
    title: '路由demo',
    component: loadable(() => import('@/pages/router-module/deep-route/parentRoute')),
    routes: [
      {
        path: CHILD_ROUTE1,
        title: '路由demo',
        exact: false,
        component: loadable(() => import('@/pages/router-module/deep-route/child-route/childRoute')),
      },
      {
        path: CHILD_ROUTE2,
        title: '深层路由demo',
        component: loadable(() => import('@/pages/router-module/deep-route/child-route/childRoute2')),
        routes: [
          {
            path: GRANDCHIND_ROUTE1,
            exact: false,
            title: '子孙路由1',
            component: loadable(
              () => import('@/pages/router-module/deep-route/child-route/grandchind-route/grandchind-route'),
            ),
          },
          {
            path: GRANDCHIND_ROUTE2,
            exact: false,
            title: '子孙路由2',
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
