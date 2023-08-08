export type QuestionParagraphyPropsType = {
  text?: string
  isCenter?: boolean

  isVisable?: boolean
  isLock?: boolean
}

export const QuestionParagraphyDefaultProps: QuestionParagraphyPropsType = {
  text: '段落',
  isCenter: false,
  isVisable: true,
  isLock: false
}
