import { useRequest } from 'ahooks'
import { useSearchParams } from 'react-router-dom'
import {
  LIST_SEARCH_PAGE,
  LIST_SEARCH_PAGESIZE,
  LIST_SEARCH_PARAM_KEY
} from '../constant'
import { fetchQuestionList } from '../service/question'
interface IOpt {
  isStar?: boolean
  isDeleted?: boolean
}

function useQuestionRequest(opt?: IOpt) {
  const [searchParams] = useSearchParams()
  const { data, loading, error } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
      const page = parseInt(searchParams.get(LIST_SEARCH_PAGE) || '') || 1
      const pageSize =
        parseInt(searchParams.get(LIST_SEARCH_PAGESIZE) || '') || 10
      const data = await fetchQuestionList({
        keyword,
        ...opt,
        page,
        pageSize
      })
      return data
    },
    {
      refreshDeps: [searchParams]
    }
  )

  return { data, loading, error }
}

export default useQuestionRequest
