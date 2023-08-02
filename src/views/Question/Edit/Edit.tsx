import React, { memo, Fragment } from 'react'
import type { FC, ReactNode } from 'react'
import { Spin } from 'antd'
import EditHeader from './components/EditHeader'
import { EditWrapper } from './style'
import EditCanvas from './components/EditCanvas'
import useLoadEditData from '../../../hooks/useLoadEditData'

interface IProps {
  children?: ReactNode
}

const Edit: FC<IProps> = () => {
  const { loading } = useLoadEditData()

  return (
    <EditWrapper>
      {loading ? (
        <Spin />
      ) : (
        <Fragment>
          <EditHeader />
          <div className="bottom">
            <div className="content-wrapper">
              <div className="left">left</div>
              <div className="main">
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
