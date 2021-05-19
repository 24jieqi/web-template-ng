import loadable from '@loadable/component'
import { RouteConfig } from 'react-router-config';
import routerModule from './router-module';
import baseModule from './base-module';
const routes: RouteConfig[] = [...routerModule, ...baseModule,{
  path: '*',
  component:  loadable(() => import('@/pages/404')),
}];

export default routes;
