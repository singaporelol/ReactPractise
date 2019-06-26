import React, { Component } from 'react'
import {Input, Form} from 'antd'
import Axios from 'axios';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

 class OnBlurDemo extends Component {
  
  componentDidMount(){
    this.props.form.validateFields();
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const {getFieldDecorator, setFields}=this.props.form;
    // validateFields((err,values)=>{
    //   if(!err){
    //     console.log(values);
    //   }
    // })
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
    return (
      <Form style={{width:"150px"}} onSubmit={this.handleSubmit}>
        <Form.Item label="用户名" colon hasFeedback={true}>
        {getFieldDecorator('UserName', {
            rules: [
              { required: true, message: '用户名不能为空' },
              {min:5, message:'必须大于5个字符'},
              // {validator: (rule,value,callback)=>{
              //   console.log('validator')

              // },},
            
            ],           
             validateTrigger:'onChange',
          })(
            <Input placeholder="请输入用户名..." onBlur={()=>{
              //发送ajax请求到后台。返回结果进行操作。
              Axios.get("/api/GetUserinfoByName",{
                params:{
                  UserName:"admin2"
                }
              }).then((res)=>{
                if(res.data.data.exist==true){
                  console.log(res.data.data.exist);
                setFields({
                  "UserName":{value:"12",errors:[new Error('水电费')]}
                })
                }
              })
            }}/>,
          )}
        </Form.Item>
      </Form>
    )
  }
}
export default Form.create({name:'userinfoEditModal'})(OnBlurDemo);
