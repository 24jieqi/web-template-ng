import useGlobalStore from '@/stores/global';
import { useMount } from 'ahooks';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Index: React.FC = () => {
  const history = useHistory();
  const { logout } = useGlobalStore();
  useMount(() => {
    logout();
  });
  const onFinish = (values: any) => {
    // 登录逻辑
    history.push('/');
    console.log('Success:', values);
  };
  return (
    <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Index;
