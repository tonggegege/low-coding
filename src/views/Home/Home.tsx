import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Button, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HomeWrapper } from './style'
import { LOGIN_PATHNAME, MANAGE_INDEX_PATHNAME } from '../../router'
import { StateType } from '../../store'
import { IState as userIState } from '../../store/modules/homeReducer'

const { Title, Paragraph } = Typography

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const user = useSelector<StateType>(
    (state) => state.homeReducer
  ) as userIState

  const [isLoading, setLoading] = useState<boolean>(user.userInfo.loading)

  useEffect(() => {
    setLoading(!isLoading)
  }, [user])

  const nav = useNavigate()

  function handleStartClick() {
    const dataKeys = Reflect.ownKeys(user.userInfo)
    if (dataKeys.length === 0) {
      nav(LOGIN_PATHNAME)
    } else {
      nav(MANAGE_INDEX_PATHNAME)
    }
  }

  return (
    <HomeWrapper>
      <div className="info">
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>
          已累计创建问卷 100 份，发布问卷 90 份，收到答卷 980 份
        </Paragraph>
        <div>
          <Button
            type="primary"
            disabled={!isLoading}
            onClick={handleStartClick}
          >
            开始使用
          </Button>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default memo(Home)
