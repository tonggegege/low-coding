import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Space, Tag, Divider, Button, Popconfirm, Modal } from 'antd'
import {
  StarOutlined,
  EditOutlined,
  LineChartOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { QuestionCardWrapper } from './style'
import { fetchCopyQuestion, fetchModifyQuestion } from '../../service/question'

const { confirm } = Modal

interface IProps {
  children?: ReactNode
  starPage?: boolean
  _id: string
  title: string
  isStar: boolean
  isPublished: boolean
  isDeleted: boolean
  answerCount: number
  createdAt: string
}

const QuestionCard: FC<IProps> = (props) => {
  const {
    _id,
    title,
    isStar,
    isPublished,
    isDeleted,
    answerCount,
    createdAt,
    starPage
  } = props

  const [isStarState, setIsStarState] = useState(isStar)
  const [isDeletedState, setIsDeletedState] = useState(isDeleted)

  const nav = useNavigate()

  // 标星
  const { run: handleChangeStar, loading: changeStarLoading } = useRequest(
    async () => {
      const data = await fetchModifyQuestion(_id, { isStar: !isStarState })
      return data
    },
    {
      manual: true,
      onSuccess() {
        setIsStarState(!isStarState)
      }
    }
  )

  // 复制
  const { run: handleCopyQuestion, loading: copyLoading } = useRequest(
    async () => {
      const data = await fetchCopyQuestion(_id)
      return data
    },
    {
      manual: true,
      onSuccess(data) {
        nav({
          pathname: `/question/edit/${data.id}`
        })
      }
    }
  )

  // 删除
  const { run: handleDelete, loading: deleteLoading } = useRequest(
    async () => {
      await fetchModifyQuestion(_id, { isDeleted: !isDeleted })
    },
    {
      manual: true,
      onSuccess() {
        setIsDeletedState(!isDeleted)
      }
    }
  )

  const del = () => {
    confirm({
      title: '确定删除该问卷？',
      icon: <ExclamationCircleOutlined />,
      onOk: handleDelete
    })
  }

  if (isDeletedState) {
    return null
  }

  if (!isStarState && starPage) {
    return null
  }

  return (
    <QuestionCardWrapper>
      <div className="title">
        <div className="left">
          <Link
            to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}
          >
            <Space>
              {isStarState && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className="right">
          <Space>
            {isPublished ? (
              <Tag color="processing">已发布</Tag>
            ) : (
              <Tag>未发布</Tag>
            )}
            <span>答卷: {answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>

      <Divider style={{ margin: '12px 0' }} />

      <div className="button-container">
        <div className="left">
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              编辑问卷
            </Button>

            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/stat/${_id}`)}
              disabled={!isPublished}
            >
              问卷统计
            </Button>
          </Space>
        </div>
        <div className="right">
          <Space>
            <Button
              type="text"
              icon={<StarOutlined />}
              size="small"
              onClick={handleChangeStar}
              disabled={changeStarLoading}
            >
              {isStarState ? '取消标星' : '标星'}
            </Button>
            <Popconfirm
              title="确定复制该问卷"
              okText="确定"
              cancelText="取消"
              onConfirm={handleCopyQuestion}
            >
              <Button
                type="text"
                icon={<CopyOutlined />}
                size="small"
                disabled={copyLoading}
              >
                复制
              </Button>
            </Popconfirm>
            <Button
              type="text"
              icon={<DeleteOutlined />}
              size="small"
              onClick={del}
              disabled={deleteLoading}
            >
              删除
            </Button>
          </Space>
        </div>
      </div>
    </QuestionCardWrapper>
  )
}

export default memo(QuestionCard)
