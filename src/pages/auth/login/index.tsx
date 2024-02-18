import React from 'react'
import { useNavigate } from 'react-router-dom'

import useUser from '@/stores/user'
import { sleep } from '@/utils'

import type { LoginFormValues } from './components/login-form-page'
import LoginFormPage from './components/login-form-page'
import coverImg from './images/cover.webp'

const Login: React.FC = () => {
  const { setToken } = useUser()
  const navigate = useNavigate()
  const onLogin = async (_: LoginFormValues) => {
    // tips: 需要调整
    try {
      const token = await sleep<string>(1000, 'thisistoken')
      setToken(token)
      navigate('/')
    } catch (error) {}
  }

  return (
    <LoginFormPage title="XX系统登录" coverImg={coverImg} onFinish={onLogin} />
  )
}

export default Login
