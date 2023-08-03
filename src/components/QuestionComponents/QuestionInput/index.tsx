import React, { memo } from 'react'
import type { FC } from 'react'
import { Typography, Input } from 'antd'
import { QuestionInputWrapper } from './style'
import { QuestionInputPropsType, QuestionInputDefaultProps } from './interface'

const { Paragraph } = Typography

const QuestionInput: FC<QuestionInputPropsType> = (props) => {
  const { title, placeholder } = Reflect.ownKeys(props).length
    ? props
    : QuestionInputDefaultProps

  return (
    <QuestionInputWrapper>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder}></Input>
      </div>
    </QuestionInputWrapper>
  )
}

export default memo(QuestionInput)
