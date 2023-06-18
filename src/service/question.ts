import hyRequest from '.'

export function fetchSingleQuestion(id: string) {
  return hyRequest.get({
    url: `/question/${id}`
  })
}

export async function fetchQuestionList({
  pageSize = 10,
  isDeleted = false,
  isStar = false,
  keyword = '',
  page = 1
}) {
  return hyRequest.get({
    url: '/question',
    params: { keyword, pageSize, isDeleted, isStar, page }
  })
}

export function fetchCreateQuesion() {
  return hyRequest.post({
    url: '/question'
  })
}
