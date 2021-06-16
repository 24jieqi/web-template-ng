import React, { FC } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { CustomRouteConfig } from '@/router/config/index';
import styles from './index.module.less';

export interface BreadcrumbItem {
  name: string;
  path?: string;
}
interface IProps {
  route: CustomRouteConfig;
}

const AppBreadcrumb: FC<IProps> = ({ route }) => {
  const breadcrumb = route?.breadcrumb || [];
  if (breadcrumb.length === 0) {
    return null;
  }
  return (
    <Breadcrumb className={styles.wrap}>
      {breadcrumb?.map((v, i) => {
        return v?.path ? (
          <Breadcrumb.Item key={i}>
            <Link to={v?.path}>{v.name}</Link>
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={i}>{v.name}</Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
