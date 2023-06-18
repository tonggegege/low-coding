import hyRequest from '.'

interface IOpt {
  [key: string]: any
}

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

// 星标/恢复修改
export function fetchModifyQuestion(id: string, opt: IOpt) {
  return hyRequest.patch({
    url: `/question/${id}`,
    data: opt
  })
}

// 复制问卷
export function fetchCopyQuestion(id: string) {
  return hyRequest.post({
    url: `/question/duplicate/${id}`
  })
}

// 批量彻底删除问卷
export function fetchDeletedQuestion(ids: Array<string>) {
  return hyRequest.delete({
    url: `/question`,
    data: {
      ids
    }
  })
}
