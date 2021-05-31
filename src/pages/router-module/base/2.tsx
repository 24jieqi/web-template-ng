import React from 'react';
import { useHistory } from 'react-router-dom';

const Index: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <p>页面2</p>
      <p
        onClick={() => {
          history.goBack();
        }}>
        点击goBack
      </p>
    </div>
  );
};

export default Index;
