import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  userInfo: {
    username: string
    nickname: string
  }
}

const initialState: IState = {
  userInfo: {
    username: '',
    nickname: ''
  }
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    saveUserInfo(state, { payload }) {
      state.userInfo = payload
    }
  }
})

export const { saveUserInfo } = homeSlice.actions
export default homeSlice.reducer
