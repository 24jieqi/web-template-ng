import React from 'react';
import loadable from '@loadable/component'
import { BASE1, BASE2, CHILD_ROUTE1, CHILD_ROUTE2, GRANDCHIND_ROUTE1, GRANDCHIND_ROUTE2 } from './path';
const routes = [
  {
    path: BASE1,
    exact: true,
    component:  loadable(() => import('@/pages/router-module/base/1')),
  },
  {
    path: BASE2,
    exact: true,
    component:  loadable(() => import('@/pages/router-module/base/2')),
  },
  {
    path:CHILD_ROUTE2,
    component: loadable(() => import('@/pages/router-module/deep-route/parentRoute')),
    routes: [
      {
        path: CHILD_ROUTE1,
        exact: false,
        component: loadable(() => import('@/pages/router-module/deep-route/child-route/childRoute'))
      },
      {
        component: loadable(() => import('@/pages/router-module/deep-route/child-route/childRoute2')),
        routes: [
          {
            path: GRANDCHIND_ROUTE1,
            exact: false,
            component: loadable(() => import('@/pages/router-module/deep-route/child-route/grandchind-route/grandchind-route'))
          },
          {
            path: GRANDCHIND_ROUTE2,
            exact: false,
            component: loadable(() => import('@/pages/router-module/deep-route/child-route/grandchind-route/grandchind-route2'))
          }
        ]
      }
    ]
  },
];

export default routes;
