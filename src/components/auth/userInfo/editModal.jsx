import React from 'react' 
import {Input, Form} from 'antd'

class EditModal extends React.Component {
  constructor() {

    super()
    this.state = {}
  }
  componentDidMount(){
    this.props.form.setFieldsValue({
      "UserName":this.props.UserName
    })
  }
  render() {
    const {getFieldDecorator}=this.props.form;
    console.log(this.props.form);
    return (
      <Form>
        <Form.Item label="用户名" colon>
        {getFieldDecorator('UserName', {
            rules: [{ required: true, message: '用户名不能为空' }],
          })(
            <Input placeholder="请输入用户名..."/>,
          )}
        </Form.Item>
        
        
      </Form>
    )
  }
}

export default Form.create({name:'userinfoEditModal'})(EditModal);