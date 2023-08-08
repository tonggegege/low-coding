import React, { memo, useEffect } from 'react'
import type { FC } from 'react'
import { Form, Input, Checkbox } from 'antd'
import { useDispatch } from 'react-redux'
import { editComponentConfAction } from '../../../../store/modules/editReducer'
import { QuestionParagraphyPropsType } from '../interface'

const { TextArea } = Input

const PropComponent: FC<QuestionParagraphyPropsType> = (
  props: QuestionParagraphyPropsType
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
      disabled={props.isLock}
    >
      <Form.Item
        label="段落内容"
        name="text"
        rules={[{ required: true, message: '请输入段落内容' }]}
      >
        <TextArea></TextArea>
      </Form.Item>
      <Form.Item name="isCenter" valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default memo(PropComponent)
