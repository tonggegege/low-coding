import React, { memo } from 'react'
import type { FC } from 'react'
import { Typography } from 'antd'
import {
  QuestionParagraphyPropsType,
  QuestionParagraphyDefaultProps
} from './interface'
import { QuestionParagraphyWrapper } from './style'

const { Paragraph } = Typography

const QuestionParagraphy: FC<QuestionParagraphyPropsType> = (props) => {
  const { text = '', isCenter } = Reflect.ownKeys(props).length
    ? props
    : QuestionParagraphyDefaultProps

  const textList = text.split('\n')

  return (
    <QuestionParagraphyWrapper>
      <Paragraph style={{ textAlign: isCenter ? 'center' : 'start' }}>
        {textList.map((t, index) => (
          <span key={index}>
            {index > 0 && <br />}
            {t}
          </span>
        ))}
      </Paragraph>
    </QuestionParagraphyWrapper>
  )
}

export default memo(QuestionParagraphy)
