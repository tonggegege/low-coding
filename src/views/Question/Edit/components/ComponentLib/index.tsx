import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { ComponentLibWrapper } from './style'
import { componentCategoryList } from '../../../../../components/QuestionComponents'
import { ComponentConfType } from '../../../../../components/QuestionComponents'
import { addCompontConfAction } from '../../../../../store/modules/editReducer'
import { ComponentConfType as addToStoreComponentType } from '../../../../../store/modules/editReducer'
interface IProps {
  children?: ReactNode
}

const ComponentLib: FC<IProps> = () => {
  const dispatch = useDispatch()

  function handleComponentClick(SingerComponentConf: ComponentConfType) {
    const { title, defaultProps: props, type } = SingerComponentConf

    const addToStoreComponent: addToStoreComponentType = {
      fe_id: nanoid(),
      title,
      type,
      props,
      isVisable: true
    }

    dispatch(addCompontConfAction(addToStoreComponent))
  }

  return (
    <ComponentLibWrapper>
      {componentCategoryList.map((item) => {
        const { categoryTitle, componentConfs } = item

        return (
          <div className="item" key={categoryTitle}>
            <div className="categoryTitle">{categoryTitle}</div>
            <div className="componentConfList">
              {componentConfs.map((SingerComponentConf, index) => {
                return (
                  <div
                    className="component-wrapper"
                    key={index}
                    onClick={() => handleComponentClick(SingerComponentConf)}
                  >
                    <div className="component">
                      <SingerComponentConf.Component />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </ComponentLibWrapper>
  )
}

export default memo(ComponentLib)
