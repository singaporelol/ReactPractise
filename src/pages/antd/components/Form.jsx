import React, { Component } from 'react'
import FormDemo from './FormDemo'
import {Button} from 'antd'
export default class Form extends Component {
  render() {
    console.log(this.formRef);
    
    console.log(this.props);
    return (
      <div>
        <Button onClick={()=>{console.log(this.formRef.props.form.getFieldsValue());}}>在父显示form的值</Button>
        <FormDemo
          wrappedComponentRef={(form)=>{
            this.formRef=form
          }}
        ></FormDemo>
      </div>
    )
  }
}
