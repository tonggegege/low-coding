// 传入参数类型
export type QuestionTitlePropsType = {
  text?: string
  level?: 1 | 2 | 3 | 4 | 5
  isCenter?: boolean

  isVisable?: boolean
  isLock?: boolean
}

// 传入参数默认值
export const QuestionTitleDefaultProps: QuestionTitlePropsType = {
  text: '一行标题',
  level: 1,
  isCenter: false,
  isVisable: true,
  isLock: false
}
