import { Button } from 'antd';
import React from 'react';
import { useBaseInfo } from './useBaseInfo';

const UserBasicInfo: React.FC = () => {
  const name = useBaseInfo((state) => state.name);
  const setName = useBaseInfo((state) => state.setName);
  const handleChangeName = () => {
    setName('lindo');
  };
  const handleBack = () => {
  };
  return (
    <div>
      <p>用户基本信息</p>
      <p>name: {name}</p>
      <Button onClick={handleChangeName}>change name</Button>
      <Button onClick={handleBack}>go to user</Button>
    </div>
  );
};

export default UserBasicInfo;
