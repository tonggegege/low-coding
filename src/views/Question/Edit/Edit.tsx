import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { fetchSingleQuestion } from '../../../service/question'
interface IProps {
  children?: ReactNode
}

const Edit: FC<IProps> = () => {
  const { data, loading } = useRequest(fetchSingleQuestion)

  const { id = '' } = useParams()

  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) : (
        <div>
          Edit {id}
          <div>{JSON.stringify(data)}</div>
        </div>
      )}
    </div>
  )
}

export default memo(Edit)
