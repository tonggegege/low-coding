import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRequest } from 'ahooks'
import { fetchUserInfo } from '../service/user'
import { saveUserInfo } from '../store/modules/homeReducer'
import { StateType } from '../store'
import { IState as userInfoState } from '../store/modules/homeReducer'

function useLoadUserData() {
  const user = useSelector<StateType>(
    (state) => state.homeReducer
  ) as userInfoState

  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState(user.userInfo)
  const [loading, setLoading] = useState<boolean>(true)

  const { run: handleReloadData } = useRequest(
    async () => {
      const data = await fetchUserInfo()
      return data
    },
    {
      manual: true,
      onSuccess(data) {
        const loading = false

        const dataKeys = Reflect.ownKeys(data)
        if (dataKeys.length !== 0) {
          setUserInfo(data)
          setLoading(false)
          dispatch(saveUserInfo({ ...data, loading }))
        }
      }
    }
  )

  useEffect(() => {
    if (!user.userInfo.username) {
      handleReloadData()
      console.log('1111')
    }
  }, [user])

  return {
    userInfo,
    loading
  }
}

export default useLoadUserData
