import { BASE2 } from '@/router/config/router-module/path';
import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const Index: React.FC = () => {
  const history = useHistory();
  const jumpAction = () => {
    history.push(BASE2);
  };
  return (
    <div>
      <div>
        <Link to={BASE2}>link跳转</Link>
      </div>
      <Button onClick={jumpAction}>事件跳转路由</Button>
    </div>
  );
};

export default Index;
