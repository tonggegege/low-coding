import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import { LogoWrapper } from './style'
import { HOME_PATHNAME } from '../../router'

const { Title } = Typography

interface IProps {
  children?: ReactNode
}

const Logo: FC<IProps> = () => {
  const [pathname] = useState(HOME_PATHNAME)
  return (
    <LogoWrapper>
      <Link to={pathname}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>问卷星</Title>
        </Space>
      </Link>
    </LogoWrapper>
  )
}

export default memo(Logo)
