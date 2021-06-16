import React from 'react';
import { Router } from 'react-router';
import { renderRoutes } from 'react-router-config';
import routes from './config';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

const AppRouter = () => {
  return <Router history={history}>{renderRoutes(routes)}</Router>;
};

export default AppRouter;
