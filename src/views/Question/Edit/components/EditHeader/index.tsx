import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { EditHeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const EditHeader: FC<IProps> = () => {
  return <EditHeaderWrapper>EditHeader</EditHeaderWrapper>
}

export default memo(EditHeader)
