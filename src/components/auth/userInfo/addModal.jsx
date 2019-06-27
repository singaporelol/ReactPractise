import React, { Component } from 'react'
import { Input, Form } from "antd";
import axios from 'axios';
class addModal extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  validUserName = () => {
    const { setFields, getFieldValue } = this.props.form;
    let name = getFieldValue("UserName");
    axios
      .get("/api/GetUserinfoByName", {
        params: {
          UserName: name
        }
      })
      .then(res => {
        console.log(res.data.data.exist);
        if (res.data.data.exist == true) {
         return setFields({
            UserName: {
              value: name,
              errors: [new Error("该用户名已存在")]
            }
          });
        }
      });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    
    return (
      <Form>
        <Form.Item label="用户名" colon hasFeedback={true}>
        {getFieldDecorator("UserName", {
            rules: [
              { required: true, message: "用户名不能为空" },
              { min: 3, message: "必须大于3个字符" }
            ]
          })(<Input placeholder="请输入用户名..." onBlur={() => this.validUserName()} />)}
        </Form.Item>
        <Form.Item label="密码" colon hasFeedback={true}>
        {getFieldDecorator("Password", {
            rules: [
              { required: true, message: "密码不能为空" },
              { min: 3, message: "必须大于3个字符" }
            ]
          })(<Input placeholder="请输入密码"  />)}
        </Form.Item>
      </Form>
    )
  }
}
export default Form.create({ name: "userinfoaddModal" })(addModal);