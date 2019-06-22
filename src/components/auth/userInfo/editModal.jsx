import React from 'react' 
import {Input, Form} from 'antd'
import axios from 'axios';

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
        <Form.Item label="用户名" colon hasFeedback={true}>
        {getFieldDecorator('UserName', {
            rules: [
              { required: true, message: '用户名不能为空' },
              {validator: (rule,value,callback)=>{
                // console.log('validator')
                console.log(value)
                axios.get('/api/GetUserinfoByName',{
                  params:{
                    UserName:value
                  }
                }).then((res)=>{
                  console.log(res.data)
                  // callback('异步验证');
                })

              },},
              {min:5, message:'必须大于5个字符'}
            
            ],           
            validateTrigger:'onChange',
          })
          (
            <Input placeholder="请输入用户名..."/>,
          )}
         

          {/* <Input placeholder="请输入用户名..." {}/> */}
        </Form.Item>
        
        
      </Form>
    )
  }
}

export default Form.create({name:'userinfoEditModal'})(EditModal);