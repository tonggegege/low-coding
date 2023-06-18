import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import { Space, Button, Divider } from 'antd'
import { useRequest } from 'ahooks'
import {
  PlusOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import { ManagerLayoutWrapper } from './style'
import { fetchCreateQuesion } from '../../service/question'

interface IProps {
  children?: ReactNode
}

const ManagerLayout: FC<IProps> = () => {
  const { pathname } = useLocation()
  const nav = useNavigate()

  const { run: handleCreateClick } = useRequest(fetchCreateQuesion, {
    manual: true,
    onSuccess(result) {
      nav(`/question/edit/${result._id}`)
    }
  })

  return (
    <ManagerLayoutWrapper>
      <div className="left">
        <Space direction="vertical">
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={handleCreateClick}
          >
            新建问卷
          </Button>

          <Divider style={{ borderTop: 'transparent' }} />

          <Button
            type={pathname.startsWith('/manage/list') ? 'default' : 'text'}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => nav('/manage/list')}
          >
            我的问卷
          </Button>

          <Button
            type={pathname.startsWith('/manage/star') ? 'default' : 'text'}
            size="large"
            icon={<StarOutlined />}
            onClick={() => nav('/manage/star')}
          >
            星标问卷
          </Button>

          <Button
            type={pathname.startsWith('/manage/trash') ? 'default' : 'text'}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => nav('/manage/trash')}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className="right">
        <Outlet />
      </div>
    </ManagerLayoutWrapper>
  )
}

export default memo(ManagerLayout)
