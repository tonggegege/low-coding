import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Space, Button } from 'antd'
import { LeftOutlined, CheckOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { EditHeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const EditHeader: FC<IProps> = () => {
  const nav = useNavigate()

  function handleBackClick() {
    nav(-1)
  }

  return (
    <EditHeaderWrapper>
      <div className="header">
        <div className="left">
          <Space>
            <Button
              icon={<LeftOutlined />}
              type="primary"
              onClick={handleBackClick}
            >
              返回
            </Button>
          </Space>
        </div>
        <div className="main">11</div>
        <div className="right">
          <Space>
            <Button icon={<CheckOutlined />}>保存</Button>
            <Button icon={<ArrowUpOutlined />} type="primary">
              发布
            </Button>
          </Space>
        </div>
      </div>
    </EditHeaderWrapper>
  )
}

export default memo(EditHeader)
