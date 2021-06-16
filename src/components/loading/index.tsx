import React from 'react';
import styles from './style.module.less';
import loading from '@/images/loading.png';
const LoadingPage: React.FC = () => {
  return (
    <div className={styles.loadingPage}>
      <img src={loading} alt="" className={styles.loading} />
    </div>
  );
};

export default LoadingPage;
