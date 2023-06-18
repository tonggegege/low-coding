import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import { MainLayoutWrapper } from './style'
import Logo from '../../components/Logo'
import UserInfo from '../../components/userInfo'

const { Header, Content, Footer } = Layout

interface IProps {
  children?: ReactNode
}

const MainLayout: FC<IProps> = () => {
  return (
    <MainLayoutWrapper>
      <Layout>
        <Header className="header">
          <div className="left">
            <Logo />
          </div>
          <div className="right">
            <UserInfo />
          </div>
        </Header>
        <Content className="main">
          <Outlet />
        </Content>
        <Footer className="footer">所有版权由 codertg 所有</Footer>
      </Layout>
    </MainLayoutWrapper>
  )
}

export default memo(MainLayout)
