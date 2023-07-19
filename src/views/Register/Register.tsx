import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Space, Typography, Form, Input, Button, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { RegisterWrapper } from './style'
import { LOGIN_PATHNAME } from '../../router'
import { fetchUserRegister } from '../../service/user'

const { Title } = Typography

interface IProps {
  children?: ReactNode
}

const Register: FC<IProps> = () => {
  const { run: handleRegisterClick } = useRequest(
    async (values) => {
      const { username, password, nickname } = values
      await fetchUserRegister(username, password, nickname)
    },
    {
      manual: true,
      onSuccess() {
        message.success('注册成功')
      }
    }
  )
  const handleFinish = (values: any) => {
    const { nickname, username, password } = values
    handleRegisterClick({
      username,
      password,
      nickname: nickname || username
    })
  }

  return (
    <RegisterWrapper>
      <div>
        <Space>
          <Title level={2}>
            <UserOutlined />
          </Title>
          <Title level={2}>注册新用户</Title>
        </Space>
      </div>

      <div>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={handleFinish}
        >
          <Form.Item label="昵称" name="nickname">
            <Input />
          </Form.Item>
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名'
              },
              {
                type: 'string',
                min: 5,
                max: 20,
                message: '字符长度在 5-20 之间'
              },
              {
                pattern: /^\w+$/,
                message: '只能是字母数字下划线'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="请输入密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="重新确认密码"
            name="confirm"
            dependencies={['password']}
            rules={[
              { required: true, message: '请输入密码' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('两次密码不一致'))
                }
              })
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <div style={{ marginLeft: '60px' }}>
                <Link to={LOGIN_PATHNAME}>已有账户，登录</Link>
              </div>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </RegisterWrapper>
  )
}

export default memo(Register)
