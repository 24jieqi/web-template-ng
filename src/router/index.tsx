import NotFound from '@/pages/404';
import { Router } from '@reach/router';
import React from 'react';
import { RouteConfig } from './config/user';

const modules = import.meta.globEager('./config/*.ts');
const config: RouteConfig[] = [];
// eslint-disable-next-line guard-for-in
for (const path in modules) {
  config.push(...modules[path].default);
}

function renderRoute(config: RouteConfig[]) {
  const result = [];
  for (const item of config) {
    const Comp = item.component;
    if (!item.children || !item.children.length) {
      result.push(<Comp key={item.path} path={item.path} />);
    } else {
      result.push(
        <Comp key={item.path} path={item.path}>
          {renderRoute(item.children)}
        </Comp>,
      );
    }
  }
  return result;
}

const RouterPage: React.FC = () => {
  return (
    <Router>
      {renderRoute(config)}
      <NotFound default />
    </Router>
  );
};

export default RouterPage;
