import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Stat: FC<IProps> = () => {
  return <div>Stat</div>
}

export default memo(Stat)
