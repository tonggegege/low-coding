export type QuestionInputPropsType = {
  title?: string
  placeholder?: string

  isVisable?: boolean
  isLock?: boolean
}

export const QuestionInputDefaultProps: QuestionInputPropsType = {
  title: '输入框标题',
  placeholder: '请输入...',
  isVisable: true,
  isLock: false
}
