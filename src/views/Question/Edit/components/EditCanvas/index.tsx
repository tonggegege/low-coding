import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { EditCanvasWrapper } from './style'
import { StateType } from '../../../../../store'
import { IState as editState } from '../../../../../store/modules/editReducer'
import { getComponentConfByType } from '../../../../../components/QuestionComponents'
import QuestionTitle from '../../../../../components/QuestionComponents/QuestionTitle'
import QuestionInput from '../../../../../components/QuestionComponents/QuestionInput'

interface IProps {
  children?: ReactNode
}

const EditCanvas: FC<IProps> = () => {
  const editState = useSelector<StateType>(
    (state) => state.editReducer
  ) as editState

  console.log(editState)
  return (
    <EditCanvasWrapper>
      {editState.ComponentConf.length !== 0 &&
        editState.ComponentConf.map((singerComponentConf) => {
          const test = getComponentConfByType(singerComponentConf.type)
          const TestComponent = test!.Component
          return (
            <div className="component-wrapper" key={singerComponentConf.fe_id}>
              <div className="component">
                <TestComponent {...singerComponentConf.props} />
              </div>
            </div>
          )
        })}
      {/* <div className="component-wrapper">
        <div className="component">
          <QuestionTitle />
        </div>
      </div>
      <div className="component-wrapper">
        <div className="component">
          <QuestionInput />
        </div>
      </div> */}
    </EditCanvasWrapper>
  )
}

export default memo(EditCanvas)
