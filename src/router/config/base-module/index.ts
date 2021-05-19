import React from 'react';
import loadable from '@loadable/component'
import Layouts from '@/layouts/index'
import { BASE1, BASE2, BASE_URL } from './path';
const routes = [
  {
    path:BASE_URL,
    component:Layouts,
    routes: [
      {
        path: BASE1,
        exact: true,
        component:  loadable(() => import('@/pages/base-module/base1/index')),
      },
      {
        path: BASE2,
        exact: true,
        component:  loadable(() => import('@/pages/base-module/base2/index')),
      },
    ]
  }
  
 
];

export default routes;
