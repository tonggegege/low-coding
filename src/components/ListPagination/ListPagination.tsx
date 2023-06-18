import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import { Pagination } from 'antd'
import { LIST_SEARCH_PAGE, LIST_SEARCH_PAGESIZE } from '../../constant'

interface IProps {
  children?: ReactNode
  total: number
}

const ListPagination: FC<IProps> = (props: IProps) => {
  const { total } = props

  const [searchParams] = useSearchParams()
  const [page, setPage] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(10)
  useEffect(() => {
    const pageVal = parseInt(searchParams.get(LIST_SEARCH_PAGE) || '') || 1
    const pageSizeVal =
      parseInt(searchParams.get(LIST_SEARCH_PAGESIZE) || '') || 10

    setPage(pageVal)
    setPageSize(pageSizeVal)
  }, [searchParams])

  const nav = useNavigate()
  const { pathname } = useLocation()
  const handleChangePage = (page: number, pageSize: number) => {
    searchParams.set(LIST_SEARCH_PAGE, page.toString())
    searchParams.set(LIST_SEARCH_PAGESIZE, pageSize.toString())

    nav({
      pathname,
      search: searchParams.toString()
    })
  }
  return (
    <>
      <Pagination
        current={page}
        total={total}
        pageSize={pageSize}
        onChange={handleChangePage}
      />
    </>
  )
}

export default memo(ListPagination)
