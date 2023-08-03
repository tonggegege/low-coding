import React, { memo, Fragment } from 'react'
import type { FC, ReactNode } from 'react'
import { Spin } from 'antd'
import { useDispatch } from 'react-redux'
import EditHeader from './components/EditHeader'
import { EditWrapper } from './style'
import EditCanvas from './components/EditCanvas'
import useLoadEditData from '../../../hooks/useLoadEditData'
import { changeSelectedAction } from '../../../store/modules/editReducer'
import EditLeftPanel from './components/EditLeftPanel'
interface IProps {
  children?: ReactNode
}

const Edit: FC<IProps> = () => {
  const { loading } = useLoadEditData()
  const dispatch = useDispatch()

  function handleSelectedClear() {
    dispatch(changeSelectedAction(''))
  }

  return (
    <EditWrapper>
      {loading ? (
        <Spin />
      ) : (
        <Fragment>
          <EditHeader />
          <div className="bottom">
            <div className="content-wrapper">
              <div className="left">
                <EditLeftPanel />
              </div>
              <div className="main" onClick={handleSelectedClear}>
                <div className="canvas-wrapper">
                  <EditCanvas />
                </div>
              </div>
              <div className="right">right</div>
            </div>
          </div>
        </Fragment>
      )}
    </EditWrapper>
  )
}

export default memo(Edit)
