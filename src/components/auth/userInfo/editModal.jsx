import React from 'react' 
import {Input} from 'antd'
import {WrappedHorizontalLoginForm} from './editUserForm'
export default class EditModal extends React.Component {
  constructor() {

    super()
    this.state = {}
  }
  render() {
    return (<div>
      <form id="edituserform">
        <label>用户名：</label>
        <Input value={this.props.UserName}></Input>
        <label>角色名称：</label>
        <WrappedHorizontalLoginForm wrappedComponentRef={(form) => this.form = form}></WrappedHorizontalLoginForm>
      </form>
    </div>)
  }
}