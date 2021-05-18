import React from 'react';

const Home:React.FC = () => {
  return <div>
    <h1>1</h1>
  </div>
}
const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  }
]


export default routes;
