import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import produce from 'immer'
import { nanoid } from 'nanoid'
import { editStoreFilter } from '../../utils/editStoreFn'

export interface ComponentConfType {
  fe_id: string
  type: string
  title: string
  props: any
  isVisable?: boolean
  isLock?: boolean
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
    },
    deleteComponentConfAction: produce((draft: IState) => {
      const index = draft.ComponentConf.findIndex(
        (item) => item.fe_id === draft.selectId
      )

      draft.ComponentConf.splice(index, 1)

      editStoreFilter(draft, index)
    }),
    visiableComponentConfAction: produce((draft: IState) => {
      const index = draft.ComponentConf.findIndex(
        (item) => item.fe_id === draft.selectId
      )

      draft.ComponentConf[index].isVisable = false

      draft.ComponentConf = draft.ComponentConf.filter((item) => item.isVisable)

      editStoreFilter(draft, index)
    }),
    lockComponentConfAction: produce((draft: IState) => {
      const component = draft.ComponentConf.find(
        (item) => item.fe_id === draft.selectId
      )!

      const nowLock = component.isLock
      component.isLock = !nowLock
    }),
    copyComponentConfAction: produce((draft: IState) => {
      draft.Component = draft.ComponentConf.find(
        (item) => item.fe_id === draft.selectId
      )!
    }),
    stickComponentConfAction: produce((draft: IState) => {
      if (draft.Component) {
        draft.Component.fe_id = nanoid(5).toString()
        const index = draft.ComponentConf.findIndex(
          (item) => item.fe_id === draft.selectId
        )

        if (index === -1) {
          draft.ComponentConf.push(draft.Component)
        } else {
          draft.ComponentConf.splice(index + 1, 0, draft.Component)
        }
      }
    }),
    upComponentConfAction: produce((draft: IState) => {
      if (draft.ComponentConf.length <= 1) return

      const index = draft.ComponentConf.findIndex(
        (item) => item.fe_id === draft.selectId
      )

      if (index === 0) {
        draft.selectId =
          draft.ComponentConf[draft.ComponentConf.length - 1].fe_id
      } else {
        draft.selectId = draft.ComponentConf[index - 1].fe_id
      }
    }),
    downComponentConfAction: produce((draft: IState) => {
      if (draft.ComponentConf.length <= 1) return

      const index = draft.ComponentConf.findIndex(
        (item) => item.fe_id === draft.selectId
      )

      if (index === draft.ComponentConf.length - 1) {
        draft.selectId = draft.ComponentConf[0].fe_id
      } else {
        draft.selectId = draft.ComponentConf[index + 1].fe_id
      }
    })
  }
})

export const {
  saveEditData,
  changeSelectedAction,
  addCompontConfAction,
  editComponentConfAction,
  deleteComponentConfAction,
  visiableComponentConfAction,
  lockComponentConfAction,
  copyComponentConfAction,
  stickComponentConfAction,
  upComponentConfAction,
  downComponentConfAction
} = editReducer.actions
export default editReducer.reducer
