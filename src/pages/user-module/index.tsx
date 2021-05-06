import { RouteComponentProps } from '@reach/router'
import { Button } from 'antd'
import React from 'react'

interface IProps extends RouteComponentProps {}

const UserMainPage: React.FC<IProps> = ({ children, navigate }) => {
  function handleGoToDetail() {
    navigate!('./basic?name=xx', { state: { name: 'dorlery' } })
  }
  return (
    <div>
      <p>用户主页</p>
      <Button onClick={handleGoToDetail}>详情</Button>
      {children}
    </div>
  )
}

export default UserMainPage
