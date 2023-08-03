import { createSlice } from '@reduxjs/toolkit'

export interface ComponentConfType {
  fe_id: string
  type: string
  title: string
  props: any
}

export interface IState {
  ComponentConf: ComponentConfType[]
  selectId: string
}

const initialState: IState = {
  ComponentConf: [],
  selectId: ''
}

const editReducer = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    saveEditData(state, { payload }) {
      state.ComponentConf = payload
    },
    changeSelectedAction(state, { payload }) {
      state.selectId = payload
    },
    addCompontConfAction(state, { payload }) {
      const selectId = state.selectId

      if (!selectId) {
        console.log(...state.ComponentConf)
        state.ComponentConf = [...state.ComponentConf, payload]
      } else {
        const index = state.ComponentConf.findIndex(
          (item) => item.fe_id === selectId
        )
        // 数据不可变原则
        saveEditData(state.ComponentConf.splice(index + 1, 0, payload))
      }
    }
  }
})

export const { saveEditData, changeSelectedAction, addCompontConfAction } =
  editReducer.actions
export default editReducer.reducer
