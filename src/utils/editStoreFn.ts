import { IState } from '../store/modules/editReducer'

function editStoreFilter(draft: IState, index: number) {
  if (draft.ComponentConf.length === 0) {
    draft.selectId === ''
  }

  if (
    (draft.ComponentConf.length > 1 ||
      index - 1 === draft.ComponentConf.length - 1) &&
    index !== 0
  ) {
    draft.selectId = draft.ComponentConf[index - 1].fe_id
  } else {
    if (draft.ComponentConf.length === 0) {
      draft.selectId = ''
    } else {
      draft.selectId = draft.ComponentConf[0].fe_id
    }
  }
}

export { editStoreFilter }
