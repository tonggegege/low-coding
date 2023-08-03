import React, { memo } from 'react'
import type { FC } from 'react'
import { Typography } from 'antd'
import { QuestionTitleWrapper } from './style'
import { QuestionTitlePropsType, QuestionTitleDefaultProps } from './interface'

const { Title } = Typography

const QuestionTitle: FC<QuestionTitlePropsType> = (props) => {
  const { text, level, isCenter } =
    Reflect.ownKeys(props).length !== 0 ? props : QuestionTitleDefaultProps

  return (
    <QuestionTitleWrapper theme={{ isCenter, level }}>
      <Title level={level} className="title">
        {text}
      </Title>
    </QuestionTitleWrapper>
  )
}

export default memo(QuestionTitle)
