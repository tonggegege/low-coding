import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { StateType } from '../store'
import { IState as userInfoState } from '../store/modules/homeReducer'
import {
  MANAGE_INDEX_PATHNAME,
  LOGIN_PATHNAME,
  REGISTER_PATHNAME
} from '../router'

// 判断是否有用户信息跳转具体页面
function useNavPage() {
  const nav = useNavigate()
  const { pathname } = useLocation()

  const user = useSelector<StateType>(
    (state) => state.homeReducer
  ) as userInfoState

  useEffect(() => {
    const isExistsUserInfo = user.userInfo.username

    if (
      !isExistsUserInfo &&
      (pathname.includes('manage') || pathname.includes('question'))
    ) {
      nav(LOGIN_PATHNAME)
    } else if (
      isExistsUserInfo &&
      (pathname === REGISTER_PATHNAME || pathname === LOGIN_PATHNAME)
    ) {
      nav(MANAGE_INDEX_PATHNAME)
    }
  }, [pathname, user])
}

export default useNavPage
