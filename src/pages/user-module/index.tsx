import { RouteComponentProps } from '@reach/router'
import React from 'react'

interface IProps extends RouteComponentProps {}

const UserMainPage: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <p>用户主页</p>
      {children}
    </div>
  )
}

export default UserMainPage
