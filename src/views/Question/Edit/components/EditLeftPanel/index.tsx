import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Tabs } from 'antd'
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import ComponentLib from '../ComponentLib'

interface IProps {
  children?: ReactNode
}

const EditLeftPanel: FC<IProps> = () => {
  const tabsItem = [
    {
      key: 'componentLib',
      label: (
        <span>
          <AppstoreOutlined />
          组件库
        </span>
      ),
      children: <ComponentLib />
    },
    {
      key: 'layers',
      label: (
        <span>
          <BarsOutlined />
          图层
        </span>
      ),
      children: <div>图层</div>
    }
  ]

  return <Tabs defaultActiveKey="componentLib" items={tabsItem} />
}

export default memo(EditLeftPanel)
