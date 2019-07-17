import React from "react";
import { Input, Form } from "antd";
import axios from "axios";

class EditModal extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  
  componentDidMount() {
    this.props.form.setFieldsValue({
      UserName: this.props.UserName,
      // Id:this.props.Id
    });
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
        if (res.data.data.exist === true) {
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
    
    // console.log(this.props.form);
    return (
      <Form>
        <Form.Item label="用户名" colon hasFeedback={true}>
          {getFieldDecorator("UserName", {
            rules: [
              // {validator: (rule,value,callback)=>{
              //   // console.log('validator')
              //   //自定义规则
              //   console.log(value)

              // },},

              { required: true, message: "用户名不能为空" },
              { min: 5, message: "必须大于5个字符" }
            ]
          })(<Input placeholder="请输入用户名..." onBlur={() => this.validUserName()} />)}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({ name: "userinfoEditModal" })(EditModal);
