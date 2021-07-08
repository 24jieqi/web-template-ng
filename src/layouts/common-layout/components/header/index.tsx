import React, { FC } from 'react'
import { Menu, Dropdown } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { State } from '@/stores/global'
import header_logo from '@/images/header_logo.png'
import defaultAvatar from '@/images/avatar_default.png'
import styles from './index.module.less'

type IProps = Pick<State, 'logout' | 'userInfo'> & {
  collapsed: boolean
  setCollapsed: (collapse: boolean) => void
}

const AppHeader: FC<IProps> = ({ userInfo, logout, collapsed, setCollapsed }) => {
  const CollapseIcon = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
  const routeToLogin = () => {
    location.href = '/login'
  }
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          logout(routeToLogin)
        }}>
        退出登录
      </Menu.Item>
    </Menu>
  )
  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <img src={header_logo} />
        <div className={styles.name}>星桥分拣管理系统</div>
        <CollapseIcon
          onClick={() => {
            setCollapsed(!collapsed)
          }}
          className={styles.collapseIcon}
        />
      </div>
      <div className={styles.right}>
        <span className={styles.corpName}>{userInfo?.companyName}</span>
        <Dropdown overlay={menu} trigger={['hover', 'click']}>
          <div className={styles.userInfo}>
            <img src={defaultAvatar} />
            <span className={styles.userName}>{userInfo?.username}</span>
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

export default AppHeader
