import { RouteComponentProps } from '@reach/router';
import React from 'react';

type IProps = RouteComponentProps;

const NotFound: React.FC<IProps> = () => {
  return (
    <div>
      <p>默认缺省页</p>
    </div>
  );
};

export default NotFound;
