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
  PropComponent: FC<componentPropsType>
  defaultProps: componentPropsType
}

export const componentConfList: ComponentConfType[] = [
  QuestionTitleConf,
  QuestionInputConf
]

interface componentCategoryListIState {
  categoryTitle: string
  componentConfs: ComponentConfType[]
}

export const componentCategoryList: componentCategoryListIState[] = [
  {
    categoryTitle: '系列一',
    componentConfs: [QuestionTitleConf]
  },
  {
    categoryTitle: '系列二',
    componentConfs: [QuestionInputConf]
  }
]

export function getComponentConfByType(type: string) {
  return componentConfList.find((c) => c.type === type)
}
