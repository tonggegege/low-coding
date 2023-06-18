import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Typography, Empty } from 'antd'
import { ManagerCommonWrapper } from '../style'
import QuestionCard from '../../../components/QuestionCard'
import ListSearch from '../../../components/ListSearch/ListSearch'
import useQuestionRequest from '../../../hooks/useQuestionRequest'
import ListPagination from '../../../components/ListPagination/ListPagination'

const { Title } = Typography

interface IProps {
  children?: ReactNode
}

const Star: FC<IProps> = () => {
  const { data, loading } = useQuestionRequest({ isStar: true })

  return (
    <ManagerCommonWrapper>
      <div className="header">
        <div className="left">
          <Title level={3}>星标问卷</Title>
        </div>
        <div className="right">
          <ListSearch />
        </div>
      </div>
      <div className="content">
        {loading && <Empty description="暂无数据" />}
        {!loading &&
          data.list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className="footer">
        {!loading && <ListPagination total={data.total} />}
      </div>
    </ManagerCommonWrapper>
  )
}

export default memo(Star)
