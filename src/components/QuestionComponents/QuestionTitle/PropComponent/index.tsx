import React, { memo, useEffect } from 'react'
import type { FC } from 'react'
import { Checkbox, Form, Input, Select } from 'antd'
import { useDispatch } from 'react-redux'
import { editComponentConfAction } from '../../../../store/modules/editReducer'

import { QuestionTitlePropsType } from '../interface'

const PropComponent: FC<QuestionTitlePropsType> = (
  props: QuestionTitlePropsType
) => {
  const selectOptions = [
    {
      value: 1,
      text: '1'
    },
    {
      value: 2,
      text: '2'
    },
    {
      value: 3,
      text: '3'
    },
    {
      value: 4,
      text: '4'
    },
    {
      value: 5,
      text: '5'
    }
  ]

  const dispatch = useDispatch()

  useEffect(() => {
    form.setFieldsValue(props)
  }, [props])

  function handleValueChange() {
    const editData = form.getFieldsValue()
    dispatch(editComponentConfAction(editData))
  }

  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={handleValueChange}
      initialValues={props}
      disabled={props.isLock}
    >
      <Form.Item label="标题" name="text">
        <Input placeholder="请输入标题..." />
      </Form.Item>
      <Form.Item label="标题层级" name="level">
        <Select options={selectOptions}></Select>
      </Form.Item>
      <Form.Item label="是否居中显示" name="isCenter" valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default memo(PropComponent)
