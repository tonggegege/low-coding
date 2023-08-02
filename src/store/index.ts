import { configureStore } from '@reduxjs/toolkit'
import homeReducer, { IState as homeIState } from './modules/homeReducer'
import editReducer, { IState as editState } from './modules/editReducer'

export interface StateType {
  homeReducer: homeIState
  editReducer: editState
}

const store = configureStore({
  reducer: {
    homeReducer,
    editReducer
  }
})

export default store
