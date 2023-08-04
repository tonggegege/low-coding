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
  Component: ComponentConfType | null
}

const initialState: IState = {
  ComponentConf: [],
  selectId: '',
  Component: null
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
        state.ComponentConf = [...state.ComponentConf, payload]
      } else {
        const index = state.ComponentConf.findIndex(
          (item) => item.fe_id === selectId
        )
        // 数据不可变原则
        saveEditData(state.ComponentConf.splice(index + 1, 0, payload))
      }
    },
    editComponentConfAction(state, { payload }) {
      const componentConf = state.ComponentConf.find(
        (componentConf) => componentConf.fe_id === state.selectId
      )

      if (!componentConf) return

      componentConf.props = payload
      saveEditData(state.ComponentConf)
    }
  }
})

export const {
  saveEditData,
  changeSelectedAction,
  addCompontConfAction,
  editComponentConfAction
} = editReducer.actions
export default editReducer.reducer
