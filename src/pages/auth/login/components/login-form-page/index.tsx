import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { isMobile } from '@fruits-chain/utils'
import { Button, Form, Input } from 'antd'
import type { RuleObject } from 'antd/es/form'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import config from '@/config'
import { SET_PASSWORD } from '@/pages/auth/route'
import { encrypt } from '@/utils/crypto'

import type { LoginLayoutProps } from '../layout'
import LoginLayout from '../layout'

import styles from './style.module.less'

export interface LoginFormValues {
  phone: string
  password: string
}

interface LoginFormPageProps extends LoginLayoutProps {
  /**
   * 表单通过校验后执行的自定义提交事件
   * @param values
   * @returns
   */
  onFinish: (values: LoginFormValues) => Promise<void>
  /**
   * 点击设计密码按钮的事件
   * @returns
   */
  onResetPassword?: () => void
  /**
   * 自定义电话号码校验
   * @param rule
   * @param value
   * @returns
   */
  customPhoneValidator?: (rule: RuleObject, value: string) => Promise<void>
}

export const phoneValidator = async (_: any, value: string) => {
  if (!value) {
    return
  }
  if (!isMobile(value)) {
    throw new Error('请输入正确的手机号')
  }
}

const LoginFormPage: React.FC<LoginFormPageProps> = ({
  onFinish,
  customPhoneValidator,
  onResetPassword,
  ...restProps
}) => {
  const [loading, setLoading] = useState(false)
  async function handleFinish(values: LoginFormValues) {
    setLoading(true)
    try {
      await onFinish({
        ...values,
        // 对密码进行非对称加密
        password: encrypt(values.password, config.rsaPublicKey),
      })
    } finally {
      setLoading(false)
    }
  }
  return (
    <LoginLayout {...restProps}>
      <Form<LoginFormValues>
        name="login"
        initialValues={{ phone: '', password: '' }}
        validateTrigger={['onChange', 'onBlur']}
        onFinish={handleFinish}>
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: '请输入手机号!' },
            { validator: phoneValidator, validateTrigger: 'onBlur' },
          ]}>
          <Input
            className={styles.input}
            placeholder="请输入手机号"
            size="large"
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <div className={styles.passwordWrapper}>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}>
            <Input.Password
              placeholder="请输入密码"
              className={styles.input}
              size="large"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <div className={styles.extraWrapper}>
            <Link to={SET_PASSWORD} className={styles.resetBtnText}>
              设置密码
            </Link>
          </div>
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className={styles.btn}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </LoginLayout>
  )
}

export default LoginFormPage
