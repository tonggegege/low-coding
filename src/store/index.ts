import { configureStore } from '@reduxjs/toolkit'
import homeReducer, { IState as homeIState } from './modules/homeReducer'

export interface StateType {
  homeReducer: homeIState
}

const store = configureStore({
  reducer: {
    homeReducer
  }
})

export default store
