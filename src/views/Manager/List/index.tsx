import React, { memo, useState, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { Typography } from 'antd'
import { useRequest, useDebounceFn } from 'ahooks'
import { useSearchParams } from 'react-router-dom'
import QuestionCard from '../../../components/QuestionCard'
import { ManagerCommonWrapper } from '../style'
import ListSearch from '../../../components/ListSearch/ListSearch'
import { fetchQuestionList } from '../../../service/question'
import { LIST_SEARCH_PARAM_KEY } from '../../../constant'

const { Title } = Typography

interface IProps {
  children?: ReactNode
}

const List: FC<IProps> = () => {
  const [isStart, setIsStart] = useState<boolean>(true)
  const [isBottom, setIsBottom] = useState<boolean>(false)
  const [list, setList] = useState<any[]>([])
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  const [total, setTotal] = useState<number>(0)

  const loadMoreRef = useRef<HTMLDivElement>(null)

  const [searchParams] = useSearchParams()
  const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''

  // run：手动触发
  const { run: load, loading } = useRequest(
    async () => {
      const data = await fetchQuestionList({
        page,
        pageSize,
        keyword
      })

      return data
    },
    {
      manual: true,
      onSuccess(result) {
        console.log(result)
        const { list: l = [], total = 0 } = result
        setList([...list, ...l])
        setTotal(total)
        setPage(page + 1)
      }
    }
  )

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    setPage(1)
    setPageSize(10)
    setList([])
    load()
  }, [keyword])

  // 只触发最后一次
  const { run: LoadMoreData } = useDebounceFn(
    () => {
      if (!document.body.clientHeight) return
      const screenHeight = document.body.clientHeight
      if (!loadMoreRef.current) return
      const distanceToTop = loadMoreRef.current.getBoundingClientRect().bottom

      if (distanceToTop <= screenHeight) {
        load()
        setIsBottom(true)
        setIsStart(false)
      }
    },
    {
      wait: 1000
    }
  )

  useEffect(() => {
    if (!isBottom && total >= list.length) {
      window.addEventListener('scroll', LoadMoreData)
    }

    setIsBottom(false)

    return () => {
      window.removeEventListener('scroll', LoadMoreData)
    }
  }, [isBottom])

  return (
    <ManagerCommonWrapper>
      <div className="header">
        <div className="left">
          <Title level={3}>我的问卷</Title>
        </div>
        <div className="right">
          <ListSearch />
        </div>
      </div>

      <div className="content">
        {list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q

            return <QuestionCard key={_id} {...q} />
          })}
      </div>

      <div className="footer" ref={loadMoreRef}>
        加载更多中...
      </div>
    </ManagerCommonWrapper>
  )
}

export default memo(List)
