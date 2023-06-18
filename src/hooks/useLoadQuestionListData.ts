import { useRequest } from 'ahooks'
import { useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY } from '../constant'
import { fetchQuestionList } from '../service/question'

function useLoadQuestionList() {
  const [searchParams] = useSearchParams()

  const { data, loading, error } = useRequest(
    async () => {
      const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''

      const data = await fetchQuestionList({ keyword })
      return data
    },
    {
      refreshDeps: [searchParams]
    }
  )

  return { data, loading, error }
}

export default useLoadQuestionList
