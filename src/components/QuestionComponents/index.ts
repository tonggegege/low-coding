import type { FC } from 'react'
import { QuestionTitlePropsType } from './QuestionTitle/interface'
import QuestionTitleConf from './QuestionTitle/setting'

import { QuestionInputPropsType } from './QuestionInput/interface'
import QuestionInputConf from './QuestionInput/setting'

import { QuestionParagraphyPropsType } from './QuestionParagraphy/interface'
import QuestionParagraphyConf from './QuestionParagraphy/setting'

export type componentPropsType = QuestionTitlePropsType &
  QuestionInputPropsType &
  QuestionParagraphyPropsType

export type ComponentConfType = {
  title: string
  type: string
  Component: FC<componentPropsType>
  PropComponent: FC<componentPropsType>
  defaultProps: componentPropsType
  isVisable: boolean
  isLock: boolean
}

export const componentConfList: ComponentConfType[] = [
  QuestionParagraphyConf,
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
    componentConfs: [QuestionTitleConf, QuestionParagraphyConf]
  },
  {
    categoryTitle: '系列二',
    componentConfs: [QuestionInputConf]
  }
]

export function getComponentConfByType(type: string) {
  return componentConfList.find((c) => c.type === type)
}
