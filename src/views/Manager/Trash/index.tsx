import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Typography, Empty, Space, Button, Table, Tag } from 'antd'
import { useRequest } from 'ahooks'
import { ManagerCommonWrapper } from '../style'
import ListSearch from '../../../components/ListSearch/ListSearch'
import useQuestionRequest from '../../../hooks/useQuestionRequest'
import ListPagination from '../../../components/ListPagination/ListPagination'
import {
  fetchDeletedQuestion,
  fetchModifyQuestion
} from '../../../service/question'

const { Title } = Typography

interface IProps {
  children?: ReactNode
}

const Trash: FC<IProps> = () => {
  const { data, loading, refresh } = useQuestionRequest({ isDeleted: true })
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const { run: refreshClick } = useRequest(
    async () => {
      for await (const id of selectedIds) {
        fetchModifyQuestion(id, { isDeleted: false })
      }
    },
    {
      manual: true,
      debounceWait: 500,
      onSuccess() {
        refresh()
      }
    }
  )

  const { run: handleDeleted } = useRequest(
    async () => {
      const data = await fetchDeletedQuestion(selectedIds)

      return data
    },
    {
      manual: true,
      onSuccess(data) {
        console.log(data)
        setSelectedIds([])
        refresh()
      }
    }
  )

  const [isLoading] = useState(false)

  const tableColumns = [
    {
      title: '标题',
      dataIndex: 'title'
      // key: 'title', // 循环列的 key ，它会默认取 dataIndex 的值
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing">已发布</Tag>
        ) : (
          <Tag>未发布</Tag>
        )
      }
    },
    {
      title: '答卷',
      dataIndex: 'answerCount'
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt'
    }
  ]

  const TableElem = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button
            type="primary"
            disabled={selectedIds.length === 0}
            onClick={refreshClick}
          >
            恢复
          </Button>
          <Button
            danger
            style={{ border: '1px solid #e8e8e8' }}
            disabled={selectedIds.length === 0}
            onClick={handleDeleted}
          >
            彻底删除
          </Button>
        </Space>
      </div>
      <div style={{ border: '1px solid #e8e8e8' }}>
        <Table
          dataSource={!loading ? data.list : []}
          columns={tableColumns}
          pagination={false}
          rowKey={(q) => q._id}
          rowSelection={{
            type: 'checkbox',
            onChange: (selectedRowKeys) => {
              setSelectedIds(selectedRowKeys as string[])
            }
          }}
        ></Table>
      </div>
    </>
  )

  return (
    <ManagerCommonWrapper>
      <div className="header">
        <div className="left">
          <Title level={3}>回收站</Title>
        </div>
        <div className="right">
          <ListSearch />
        </div>
      </div>
      <div className="content">
        {isLoading ? <Empty description="暂无数据" /> : ''}
        {!isLoading && TableElem}
      </div>
      <div className="footer">
        {!loading && <ListPagination total={data.total} />}
      </div>
    </ManagerCommonWrapper>
  )
}

export default memo(Trash)
