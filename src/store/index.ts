import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/homeReducer'

const store = configureStore({
  reducer: {
    homeReducer
  }
})

export default store
