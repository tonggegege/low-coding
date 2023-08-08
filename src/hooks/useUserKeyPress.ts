import { useKeyPress } from 'ahooks'
import { useDispatch } from 'react-redux'
import {
  copyComponentConfAction,
  stickComponentConfAction,
  upComponentConfAction,
  downComponentConfAction
} from '../store/modules/editReducer'
import { deleteComponentConfAction } from '../store/modules/editReducer'

function useUserKeyPress() {
  const dispatch = useDispatch()

  useKeyPress(['backspace', 'delete'], () => {
    if (!isActiveElementValid()) return
    dispatch(deleteComponentConfAction())
  })

  useKeyPress(['ctrl.c', 'meta.c'], () => {
    if (!isActiveElementValid()) return
    dispatch(copyComponentConfAction())
  })

  useKeyPress(['ctrl.v', 'meta.v'], () => {
    if (!isActiveElementValid()) return
    dispatch(stickComponentConfAction())
  })

  useKeyPress(['uparrow'], () => {
    if (!isActiveElementValid()) return
    dispatch(upComponentConfAction())
  })

  useKeyPress(['downarrow'], () => {
    if (!isActiveElementValid()) return
    dispatch(downComponentConfAction())
  })
}

// 函数的目的是在某些交互场景下，判断当前的活动元素是否是可以接受用户输入或交互的元素

function isActiveElementValid() {
  const activeElem = document.activeElement

  // // 没有增加 dnd-kit 之前
  // if (activeElem === document.body) return true // 光标没有 focus 到 input

  // 增加了 dnd-kit 以后
  if (activeElem === document.body) return true
  if (activeElem?.matches('div[role="button"]')) return true

  return false
}

export default useUserKeyPress
