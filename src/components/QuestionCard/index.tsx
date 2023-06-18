import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Space, Tag, Divider, Button, Popconfirm } from 'antd'
import {
  StarOutlined,
  EditOutlined,
  LineChartOutlined,
  CopyOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { QuestionCardWrapper } from './style'

interface IProps {
  children?: ReactNode
  _id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
}

const QuestionCard: FC<IProps> = (props) => {
  const { _id, title, isStar, isPublished, answerCount, createdAt } = props

  const [isStarState, setIsStarState] = useState(isStar)

  const nav = useNavigate()

  const changeStars = () => {
    setIsStarState(!isStarState)
  }

  const del = () => {
    console.log('111')
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
              onClick={changeStars}
            >
              {isStarState ? '取消标星' : '标星'}
            </Button>
            <Popconfirm title="确定复制该问卷" okText="确定" cancelText="取消">
              <Button type="text" icon={<CopyOutlined />} size="small">
                复制
              </Button>
            </Popconfirm>
            <Button
              type="text"
              icon={<DeleteOutlined />}
              size="small"
              onClick={del}
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
