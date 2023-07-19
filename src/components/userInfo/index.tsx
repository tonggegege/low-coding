import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import { LOGIN_PATHNAME } from '../../router'
import { useRequest } from 'ahooks'
import { fetchUserInfo } from '../../service/user'
import { UserOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
}

const UserInfo: FC<IProps> = () => {
  const { data, loading } = useRequest(async () => await fetchUserInfo())
  const { nickname } = data || {}

  const UseInfo = (
    <>
      <span style={{ color: '#e8e8e8' }}>
        <UserOutlined />
        {nickname}
      </span>
      <Button type="link">退出</Button>
    </>
  )

  const Login = <Link to={LOGIN_PATHNAME}>登录</Link>

  return (
    <div>
      {!loading && Reflect.ownKeys(data).length === 0 ? Login : UseInfo}
    </div>
  )
}

export default memo(UserInfo)
