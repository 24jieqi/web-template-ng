import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { Button, Input } from 'antd'

type IProps = RouteComponentProps;

const NotFound: React.FC<IProps> = () => {
  return (
    <div>
      <Button>test</Button>
      <Input />
      <p>默认缺省页</p>
    </div>
  );
};

export default NotFound;
