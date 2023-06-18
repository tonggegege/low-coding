import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { QuestionLayoutWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const QuestionLayout: FC<IProps> = () => {
  return (
    <QuestionLayoutWrapper>
      <Outlet />
    </QuestionLayoutWrapper>
  )
}

export default memo(QuestionLayout)
