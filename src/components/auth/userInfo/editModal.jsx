import React from 'react' 
import {Input, Form} from 'antd'

class EditModal extends React.Component {
  constructor() {

    super()
    this.state = {}
  }
  render() {
    const {getFieldDecorator}=this.props.form;
    console.log(this.props.form);
    return (
      <Form>
        <Form.Item label="用户名:">
        {getFieldDecorator('username', {
            rules: [{ required: true, message: '用户名不能为空' }],
          })(
            <Input value={this.props.UserName} placeholder="请输入用户名..."></Input>,
          )}
        </Form.Item>
        
        
      </Form>
    )
  }
}

export default Form.create({name:'userinfoEditModal'})(EditModal);