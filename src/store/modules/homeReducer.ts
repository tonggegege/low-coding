import { createSlice } from '@reduxjs/toolkit'

export interface IState {
  userInfo: {
    username: string
    nickname: string
    loading: boolean
  }
}

const initialState: IState = {
  userInfo: {
    username: '',
    nickname: '',
    loading: true
  }
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    saveUserInfo(state, { payload }) {
      state.userInfo = payload
      console.log(payload, 'payload')
    }
  }
})

export const { saveUserInfo } = homeSlice.actions
export default homeSlice.reducer
