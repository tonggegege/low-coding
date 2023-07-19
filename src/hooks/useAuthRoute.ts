import { useEffect } from 'react'
import router from '../router'
import { useRequest } from 'ahooks'
import { fetchUserInfo } from '../service/user'

function useAuthRoute() {
  useRequest(
    async () => {
      const data = await fetchUserInfo()

      return data
    },
    {
      manual: true,
      onSuccess(data) {
        const dataKeys = Reflect.ownKeys(data)
        if (dataKeys.length === 0) {
          console.log('123')
        }
      }
    }
  )

  useEffect(() => {
    // todo
    console.log('useEffect')
  })
}

export default useAuthRoute
