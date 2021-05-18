import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './config';

function Router() {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
  </BrowserRouter>
  );
}

export default Router;