import { RouteComponentProps } from '@reach/router';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { login, loginRq } from '@/services/mods/login/login';

type IProps = RouteComponentProps;

const UserMainPage: React.FC<IProps> = ({ children, navigate }) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('123456');
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery(['userInfo', { username, password }], loginRq);
  function handleGoToDetail() {
    navigate!('./basic?name=xx', { state: { name: 'dorlery' } });
  }
  function handleRelogin() {
    setUsername('xx');
    setPassword(password + '1');
  }
  return (
    <div>
      <p>用户主页</p>
      {isLoading ? '登录中' : ''}
      {isError ? '登录失败' : ''}
      <p>token: {data?.result.token}</p>
      <Button onClick={handleGoToDetail}>详情</Button>
      <Button onClick={handleRelogin}>重新登录</Button>
      {children}
    </div>
  );
};

export default UserMainPage;
