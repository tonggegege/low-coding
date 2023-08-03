import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { useDispatch, useSelector } from 'react-redux'
import { StateType as reducerState } from '../store'
import { IState as editIState } from '../store/modules/editReducer'
import { fetchSingleQuestion } from '../service/question'
import {
  saveEditData,
  changeSelectedAction
} from '../store/modules/editReducer'

function useLoadEditData() {
  const { id = '' } = useParams()
  const dispath = useDispatch()
  const editState = useSelector<reducerState>(
    (state) => state.editReducer
  ) as editIState

  const {
    run: handleRequestEditData,
    error,
    data,
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
    if (!data) {
      dispath(saveEditData([]))
      dispath(changeSelectedAction(''))
    } else {
      dispath(changeSelectedAction(editState.ComponentConf[0].fe_id))
    }
  }, [data])

  useEffect(() => {
    handleRequestEditData(id)
  }, [id])

  return {
    error,
    loading
  }
}

export default useLoadEditData
