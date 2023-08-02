import { createSlice } from '@reduxjs/toolkit'
// import { ComponentConfType } from '../../components/QuestionComponents'
export interface ComponentConfType {
  fe_id: string
  type: string
  title: string
  props: any
}

export interface IState {
  ComponentConf: ComponentConfType[]
}

const initialState: IState = {
  ComponentConf: []
}

const editReducer = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    saveEditData(state, { payload }) {
      state.ComponentConf = payload
    }
  }
})

export const { saveEditData } = editReducer.actions
export default editReducer.reducer
