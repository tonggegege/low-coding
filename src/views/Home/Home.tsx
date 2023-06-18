import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HomeWrapper } from './style'
import { MANAGE_INDEX_PATHNAME } from '../../router'

const { Title, Paragraph } = Typography

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const nav = useNavigate()

  return (
    <HomeWrapper>
      <div className="info">
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>
          已累计创建问卷 100 份，发布问卷 90 份，收到答卷 980 份
        </Paragraph>
        <div>
          <Button type="primary" onClick={() => nav(MANAGE_INDEX_PATHNAME)}>
            开始使用
          </Button>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
