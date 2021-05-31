import React, { memo, useEffect } from 'react';
import { Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import useGlobalStore from '@/stores/global';
import styles from './style.module.less';
import { Link } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
const { SubMenu } = Menu;

const SideMenu: React.FC = React.memo(() => {
  const { menuList, setMenuList } = useGlobalStore();
  useEffect(() => {
    setMenuList();
  }, []);
  const menuItem = (menu) => {
    // 是否有子菜单
    const hasChildren = menu?.routes?.length > 0;
    let item = null;
    // 没有子菜单显示menu
    if (!hasChildren) {
      item = (
        <Menu.Item key={menu?.title}>
          <Link to={menu?.path}>{menu?.title}</Link>
        </Menu.Item>
      );
    } else {
      // 当菜单下只有一个子菜单时，直接显示子菜单
      if (menu?.routes?.length === 1) {
        item = (
          <Menu.Item key={menu?.routes[0].path}>
            <Link to={menu?.routes[0].path}>{menu?.routes[0].title}</Link>
          </Menu.Item>
        );
      } else {
        item = (
          <Menu.SubMenu title={menu?.title} key={menu?.title}>
            {menu.routes.map((v, i) => {
              return menuItem(v);
            })}
          </Menu.SubMenu>
        );
      }
    }
    return item;
  };
  console.log('item');
  return (
    <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} className={styles.sideMenu}>
      {menuList?.map((v, i) => {
        return menuItem(v);
      })}
    </Menu>
  );
});
export default memo(SideMenu);
