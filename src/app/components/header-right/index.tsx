import { Space } from 'antd'
import React from 'react'

import FullScreen from './components/full-screen'
import Lang from './components/lang'
import Search from './components/search'
import UserInfo from './components/user-info'

const HeaderRight: React.FC = () => {
  return (
    <Space size={24}>
      <Search />
      <FullScreen />
      <Lang />
      <UserInfo />
    </Space>
  )
}

export default HeaderRight
