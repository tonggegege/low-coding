import React, { memo, useEffect, useState } from 'react'
import type { FC } from 'react'
import { Form, Input } from 'antd'
import { useDispatch } from 'react-redux'
import { editComponentConfAction } from '../../../../store/modules/editReducer'
import { QuestionInputPropsType } from '../interface'

const PropComponent: FC<QuestionInputPropsType> = (
  props: QuestionInputPropsType
) => {
  const [form] = Form.useForm()

  const dispatch = useDispatch()

  useEffect(() => {
    form.setFieldsValue(props)
  }, [props])

  function handleValuesChange() {
    const editData = form.getFieldsValue()
    dispatch(editComponentConfAction(editData))
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={handleValuesChange}
      initialValues={props}
    >
      <Form.Item label="标题" name="title">
        <Input placeholder="请输入标题..." />
      </Form.Item>
      <Form.Item label="提示" name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  )
}

export default memo(PropComponent)
