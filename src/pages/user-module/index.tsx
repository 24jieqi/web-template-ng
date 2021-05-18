import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { loginRq } from '@/services/mods/login/login';
import { queryPageListRq } from '@/services/mods/sop/queryPageList';


const UserMainPage: React.FC = ({ children }) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('123456');
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery(['userInfo', { username, password }], loginRq);
  const sopResult = useQuery(['sops', { pageNo: 1, pageSize: 10 }], queryPageListRq, { enabled: false });
  function handleGoToDetail() {
    
  }
  function handleRelogin() {
    setUsername('xx');
    setPassword(password + '1');
  }
  function handleGetList() {
    sopResult.refetch();
  }
  useEffect(() => {
    if (data?.result?.token) {
      localStorage.setItem('Authorization', data.result.token);
    }
  }, [data?.result?.token]);
  return (
    <div>
      <p>用户主页</p>
      {isLoading ? '登录中' : ''}
      {isError ? '登录失败' : ''}
      <p>token: {data?.result.token}</p>
      <Button onClick={handleGoToDetail}>详情</Button>
      <Button onClick={handleRelogin}>重新登录</Button>
      <Button loading={sopResult.isFetching} onClick={handleGetList}>
        获取列表
      </Button>
      <p>sop数量：{sopResult?.data?.result?.total}</p>
      {children}
    </div>
  );
};

export default UserMainPage;
