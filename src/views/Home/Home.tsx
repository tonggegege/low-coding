import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { HomeWrapper } from './style'
import { LOGIN_PATHNAME, MANAGE_INDEX_PATHNAME } from '../../router'
import { fetchUserInfo } from '../../service/user'

const { Title, Paragraph } = Typography

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const nav = useNavigate()

  const { run: handleStartClick } = useRequest(
    async () => {
      const data = await fetchUserInfo()
      return data
    },
    {
      manual: true,
      onSuccess(data) {
        const dataKeys = Reflect.ownKeys(data)
        if (dataKeys.length === 0) {
          nav(LOGIN_PATHNAME)
        } else {
          nav(MANAGE_INDEX_PATHNAME)
        }
      }
    }
  )

  return (
    <HomeWrapper>
      <div className="info">
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>
          已累计创建问卷 100 份，发布问卷 90 份，收到答卷 980 份
        </Paragraph>
        <div>
          <Button type="primary" onClick={handleStartClick}>
            开始使用
          </Button>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
