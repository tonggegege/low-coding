import React, { ChangeEvent, memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { Input } from 'antd'
import { LIST_SEARCH_PARAM_KEY } from '../../constant'

const { Search } = Input

interface IProps {
  children?: ReactNode
}

const ListSearch: FC<IProps> = () => {
  const [value, setValue] = useState<string>('')

  const nav = useNavigate()
  const { pathname } = useLocation()

  const [searchParams] = useSearchParams()
  useEffect(() => {
    const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setValue(curVal)
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleSearch = () => {
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`
    })
  }

  return (
    <Search
      size="large"
      allowClear
      placeholder="输入关键字"
      value={value}
      onChange={handleChange}
      onSearch={handleSearch}
      style={{ width: '260px' }}
    />
  )
}

export default memo(ListSearch)
