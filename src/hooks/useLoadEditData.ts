import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { useDispatch } from 'react-redux'
import { fetchSingleQuestion } from '../service/question'
import { saveEditData } from '../store/modules/editReducer'

function useLoadEditData() {
  const { id = '' } = useParams()
  const dispath = useDispatch()

  const {
    run: handleRequestEditData,
    error,
    loading
  } = useRequest(
    async (id: string) => {
      const data = await fetchSingleQuestion(id)

      return data
    },
    {
      manual: true,
      onSuccess(data) {
        dispath(saveEditData(data.componentList))
      }
    }
  )

  useEffect(() => {
    handleRequestEditData(id)
  }, [id])

  return {
    error,
    loading
  }
}

export default useLoadEditData
