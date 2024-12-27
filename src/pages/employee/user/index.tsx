import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '@/components/layout'

const UserListPage: React.FC = () => {
  return (
    <Layout.Container>
      <Layout.Card>
        <p>用户管理</p>
        <Link to="/employee" viewTransition>
          员工管理
        </Link>
      </Layout.Card>
    </Layout.Container>
  )
}

export default UserListPage
