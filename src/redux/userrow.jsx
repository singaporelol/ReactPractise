import React, { Component,Fragment } from 'react'
import {Form, Button} from 'react-bootstrap'
export default class UserRow extends Component {
  constructor(props){
    super(props);
    this.state={
      isEditable:false,
      item:{...this.props.item}
    }
  }
  render() {
    let {item}=this.state
    return (
      this.state.isEditable?
      <Fragment>
          <tr>
            <td>{item.id}</td>
            <td><Form.Control type="text" defaultValue={item.UserName}></Form.Control></td>
            <td><Form.Control type="text" defaultValue={item.Address}></Form.Control></td>
            <td><Form.Control type="text" defaultValue={item.Phone}></Form.Control></td>
            <td><Form.Check type="checkbox" label="是否删除" defaultChecked={item.Del}></Form.Check></td>
            <td><Form.Control type="text" defaultValue={item.Remark}></Form.Control></td>
            <td>
              <Button onClick={()=>{}}>保存</Button>
              &nbsp;
              <Button onClick={()=>this.props.remove(item.id)}>取消</Button>
            </td>
          </tr>
        </Fragment>
        :
        <Fragment>
          <tr>
            <td>{item.id}</td>
            <td>{item.UserName}</td>
            <td>{item.Address}</td>
            <td>{item.Phone}</td>
            <td>{item.Del?"是":"否"}</td>
            <td>{item.Remark}</td>
            <td>
              <Button onClick={()=>{
                this.setState({
                  isEditable:true
                })
                this.props.edit(item.id)
                }}>修改</Button>
              &nbsp;
              <Button onClick={()=>{
                this.props.remove(item.id)
              }}>删除</Button>
            </td>
          </tr>
        </Fragment>
    )
  }
}
