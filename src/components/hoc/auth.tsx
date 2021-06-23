import React, { useEffect } from 'react';
import { Modal } from 'antd';
import { useHistory } from 'react-router';
import Loading from '@/components/loading';
import useGlobalStore, { name as globalStoreName } from '@/stores/global';
import config from '@/config';

const { authorization } = config;

/**
 * 若系统需要鉴权，这执行鉴权逻辑（组件需要鉴权时使用）
 * @param Component 需要鉴权的组件
 */
function auth<T extends object>(Component: React.FC<T>): React.FC<T> {
  return (props) => {
    const { authStatus } = useGlobalStore();
    const history = useHistory();

    useEffect(() => {
      const token = JSON.parse(localStorage.getItem(globalStoreName))?.state?.token;
      // 若无token且需要鉴权则提示去登录
      if (!token && authorization) {
        Modal.info({
          title: '系统提示',
          content: '您尚未登录',
          okText: '知道了',
          onOk() {
            history.push('/login');
          },
        });
      }
    }, [history]);
    // 不需要鉴权或者鉴权数据已就绪则显示页面
    if (!authorization || authStatus === 'ok') {
      return <Component {...props} />;
    }
    // 鉴权数据获取中则页面显示loading
    if (authStatus === 'pending') {
      return <Loading />;
    }
    // 其他情况不显示页面
    return null;
  };
}

export default auth;
