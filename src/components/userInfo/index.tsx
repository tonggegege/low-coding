import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_PATHNAME } from '../../router'

interface IProps {
  children?: ReactNode
}

const UserInfo: FC<IProps> = () => {
  return (
    <div>
      <Link to={LOGIN_PATHNAME}>登录</Link>
    </div>
  )
}

export default memo(UserInfo)
