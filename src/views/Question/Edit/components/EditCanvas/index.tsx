import React, { memo, MouseEvent } from 'react'
import type { FC, ReactNode } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { EditCanvasWrapper } from './style'
import classNames from 'classnames'
import { StateType } from '../../../../../store'
import { changeSelectedAction } from '../../../../../store/modules/editReducer'
import { IState as editState } from '../../../../../store/modules/editReducer'
import { getComponentConfByType } from '../../../../../components/QuestionComponents'

interface IProps {
  children?: ReactNode
}

const EditCanvas: FC<IProps> = () => {
  const editState = useSelector<StateType>(
    (state) => state.editReducer
  ) as editState

  const dispatch = useDispatch()

  function handleComponentClick(e: MouseEvent, id: string) {
    e.stopPropagation()
    dispatch(changeSelectedAction(id))
  }

  return (
    <EditCanvasWrapper>
      {editState.ComponentConf.length !== 0 &&
        editState.ComponentConf.map((singerComponentConf, index) => {
          const singerComponent = getComponentConfByType(
            singerComponentConf.type
          )!

          return (
            <div
              className={classNames('component-wrapper', {
                active: singerComponentConf.fe_id === editState.selectId
              })}
              key={index}
              onClick={(e) =>
                handleComponentClick(e, singerComponentConf.fe_id)
              }
            >
              <div
                className="component"
                style={{
                  display: singerComponentConf.isVisable ? 'block' : 'none'
                }}
              >
                {/* main展示 */}
                <singerComponent.Component {...singerComponentConf.props} />
              </div>
            </div>
          )
        })}
    </EditCanvasWrapper>
  )
}

export default memo(EditCanvas)
