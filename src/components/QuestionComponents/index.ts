import type { FC } from 'react'
import { QuestionTitlePropsType } from './QuestionTitle/interface'
import QuestionTitleConf from './QuestionTitle/setting'

import { QuestionInputPropsType } from './QuestionInput/interface'
import QuestionInputConf from './QuestionInput/setting'

export type componentPropsType = QuestionTitlePropsType & QuestionInputPropsType

export type ComponentConfType = {
  title: string
  type: string
  Component: FC<componentPropsType>
  defaultProps: componentPropsType
}

const componentConfList: ComponentConfType[] = [
  QuestionTitleConf,
  QuestionInputConf
]

export function getComponentConfByType(type: string) {
  return componentConfList.find((c) => c.type === type)
}
