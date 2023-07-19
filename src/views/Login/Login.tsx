import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { Button, Checkbox, Form, Input, Space, Typography, message } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { LoginWrapper } from './style'
import { REGISTER_PATHNAME } from '../../router'
import { localCache } from '../../utils/cache'
import { fetchUserLogin } from '../../service/user'

const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'

function rememberUserInfo(username: string, password: string) {
  localCache.setCache(USERNAME_KEY, username)
  localCache.setCache(PASSWORD_KEY, password)
}

function removeUserInfo() {
  localCache.removeCache(USERNAME_KEY)
  localCache.removeCache(PASSWORD_KEY)
}

function getUserInfo() {
  return {
    username: localCache.getCache(USERNAME_KEY) || '',
    password: localCache.getCache(PASSWORD_KEY) || ''
  }
}

const { Title } = Typography

interface IProps {
  children?: ReactNode
}

const Login: FC<IProps> = () => {
  const [form] = Form.useForm()

  const { run: handleUserLogin } = useRequest(
    async (values) => {
      const { username, password } = values
      await fetchUserLogin(username, password)
    },
    {
      manual: true,
      onSuccess() {
        message.success('登录成功')
      },
      onError() {
        message.error('登录失败')
      }
    }
  )

  useEffect(() => {
    const { username, password } = getUserInfo()

    if (username && password) {
      form.setFieldsValue({ username, password })
      console.log(username, password)
    }
  }, [])

  const handleFinish = (values: any) => {
    const { username, password, remember } = values

    if (remember) {
      handleUserLogin({ username, password })
      rememberUserInfo(username, password)
    } else {
      removeUserInfo()
    }
  }

  return (
    <LoginWrapper>
      <div>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>用户登录</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={handleFinish}
          form={form}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              { required: true, message: '请输入用户名' },
              {
                type: 'string',
                min: 5,
                max: 20,
                message: '字符长度在 5-20 之间'
              },
              { pattern: /^\w+$/, message: '只能是字母数字下划线' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 0 }}
          >
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 2 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <div style={{ marginLeft: '60px' }}>
                <Link to={REGISTER_PATHNAME}>注册新用户</Link>
              </div>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </LoginWrapper>
  )
}

export default memo(Login)
