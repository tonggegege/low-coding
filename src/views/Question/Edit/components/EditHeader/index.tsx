import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Space, Button, Tooltip } from 'antd'
import {
  LeftOutlined,
  CheckOutlined,
  ArrowUpOutlined,
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  CopyOutlined,
  BlockOutlined
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { StateType } from '../../../../../store'
import {
  deleteComponentConfAction,
  visiableComponentConfAction,
  lockComponentConfAction,
  IState as editIState,
  copyComponentConfAction,
  stickComponentConfAction
} from '../../../../../store/modules/editReducer'
import { EditHeaderWrapper } from './style'
import useUserKeyPress from '../../../../../hooks/useUserKeyPress'

interface IProps {
  children?: ReactNode
}

const EditHeader: FC<IProps> = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()
  useUserKeyPress()

  const { selectId, Component } = useSelector<StateType>(
    (state) => state.editReducer
  ) as editIState

  function handleBackClick() {
    nav(-1)
  }

  function handleDeleteClick() {
    dispatch(deleteComponentConfAction())
  }

  function handleEyeInvisibleClick() {
    dispatch(visiableComponentConfAction())
  }

  function handleLockClick() {
    dispatch(lockComponentConfAction())
  }

  function handleCopyClick() {
    dispatch(copyComponentConfAction())
  }

  function handleStickyClick() {
    dispatch(stickComponentConfAction())
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
        <div className="main">
          <Space>
            <Tooltip title="删除">
              <Button
                icon={<DeleteOutlined />}
                onClick={handleDeleteClick}
                disabled={selectId ? false : true}
                shape="circle"
              ></Button>
            </Tooltip>
            <Tooltip title="隐藏">
              <Button
                icon={<EyeInvisibleOutlined />}
                shape="circle"
                onClick={handleEyeInvisibleClick}
                disabled={selectId ? false : true}
              ></Button>
            </Tooltip>
            <Tooltip title="锁定">
              <Button
                icon={<LockOutlined />}
                shape="circle"
                onClick={handleLockClick}
                disabled={selectId ? false : true}
              ></Button>
            </Tooltip>
            <Tooltip title="复制">
              <Button
                shape="circle"
                icon={<CopyOutlined />}
                onClick={handleCopyClick}
                disabled={selectId ? false : true}
              ></Button>
            </Tooltip>
            <Tooltip title="粘贴">
              <Button
                shape="circle"
                icon={<BlockOutlined />}
                onClick={handleStickyClick}
                disabled={!Component ? true : false}
              ></Button>
            </Tooltip>
          </Space>
        </div>
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
