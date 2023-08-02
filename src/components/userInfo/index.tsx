import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { LOGIN_PATHNAME } from '../../router'
import useLoadUserData from '../../hooks/useLoadUserData'

interface IProps {
  children?: ReactNode
}

const UserInfo: FC<IProps> = () => {
  const { userInfo, loading } = useLoadUserData()

  const { nickname } = userInfo || {}

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
      {!loading && Reflect.ownKeys(userInfo).length === 0 ? Login : UseInfo}
    </div>
  )
}

export default memo(UserInfo)
