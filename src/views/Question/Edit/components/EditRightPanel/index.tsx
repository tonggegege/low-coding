import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Tabs } from 'antd'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { StateType } from '../../../../../store'
import { IState as editReducerState } from '../../../../../store/modules/editReducer'
import { componentConfList } from '../../../../../components/QuestionComponents'

interface IProps {
  children?: ReactNode
}

const EditRightPanel: FC<IProps> = () => {
  const [Component, setComponent] = useState<any>(null)

  const editState = useSelector<StateType>(
    (state) => state.editReducer
  ) as editReducerState

  useEffect(() => {
    if (!editState.selectId) {
      setComponent(<div>未选中属性</div>)
    } else {
      const componentConf = editState.ComponentConf.find(
        (componentConf) => componentConf.fe_id === editState.selectId
      )

      if (!componentConf) {
        return
      }

      const PropsComponent = componentConfList.find(
        (item) => item.type === componentConf?.type
      )

      if (!PropsComponent) {
        return
      }

      setComponent(<PropsComponent.PropComponent {...componentConf.props} />)
    }
  }, [editState.selectId])

  const tabsItem = [
    {
      key: 'prop',
      label: (
        <span>
          <FileTextOutlined />
          属性
        </span>
      ),
      children: Component
    },
    {
      key: 'setting',
      label: (
        <span>
          <SettingOutlined />
          页面设置
        </span>
      ),
      children: <div>页面设置</div>
    }
  ]

  return <Tabs defaultActiveKey="prop" items={tabsItem} />
}

export default memo(EditRightPanel)
