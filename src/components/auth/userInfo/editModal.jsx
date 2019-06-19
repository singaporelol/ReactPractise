import React from 'react' 
import {Input} from 'antd'

export default class EditModal extends React.Component {
  constructor() {

    super()
    this.state = {}
  }
  render() {
    return (<div>
      <form>
        <label>用户名：</label>
        <Input value={this.props.UserName}></Input>
        {/* <label>角色名称：</label> */}
        
      </form>
    </div>)
  }
}