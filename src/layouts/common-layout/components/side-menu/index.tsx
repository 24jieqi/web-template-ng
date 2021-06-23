import React, { memo, createElement } from 'react';
import { Menu, MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import * as Icons from '@ant-design/icons';
import { CustomRouteConfig } from '@/router/config';
import styles from './style.module.less';

interface IProps extends MenuProps {
  menuList: CustomRouteConfig[];
}

const SideMenu: React.FC<IProps> = ({ menuList, ...restProps }) => {
  const renderMenu = (menuConfig: CustomRouteConfig[]) => {
    return menuConfig?.map((menu) => {
      const menuText = menu.meta?.menuText;
      const subRoutes = menu.routes;
      // eslint-disable-next-line import/namespace
      const icon = menu?.meta?.menuIcon ? createElement(Icons[menu.meta.menuIcon]) : null;
      if (subRoutes?.length > 0) {
        return (
          <Menu.SubMenu icon={icon} title={menuText} key={menuText}>
            {/* recursive traversal */}
            {renderMenu(subRoutes)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={menuText}>
          {/* path maybe an array! */}
          {icon}
          <Link to={Array.isArray(menu.path) ? menu.path[0] : menu.path}>{menuText}</Link>
        </Menu.Item>
      );
    });
  };
  return (
    <Menu theme="dark" mode="inline" {...restProps} className={styles.sideMenu}>
      {renderMenu(menuList)}
    </Menu>
  );
};

export default memo(SideMenu);
