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
  cancel=()=>{
    this.setState({
      isEditable:false,
      item:{...this.props.item}
    })
  }
  handlerChange=(e)=>{
    this.setState({
      item:{
        ...this.state.item,
        [e.target.name]:e.target.type=="checkbox"?e.target.checked: e.target.value
      }
    })
  }
  render() {
    let {item}=this.state
    return (
      this.state.isEditable?
      <Fragment>
          <tr>
            <td>{item.id}</td>
            <td><Form.Control name="UserName" onChange={(e)=>this.handlerChange(e)} type="text" defaultValue={item.UserName}></Form.Control></td>
            <td><Form.Control name="Address" onChange={(e)=>this.handlerChange(e)} type="text" defaultValue={item.Address}></Form.Control></td>
            <td><Form.Control name="Phone" onChange={(e)=>this.handlerChange(e)} type="text" defaultValue={item.Phone}></Form.Control></td>
            <td><Form.Check name="Del" onChange={(e)=>this.handlerChange(e)} type="checkbox" label="是否删除" defaultChecked={item.Del}></Form.Check></td>
            <td><Form.Control name="Remark" onChange={(e)=>this.handlerChange(e)} type="text" defaultValue={item.Remark}></Form.Control></td>
            <td>
              <Button onClick={()=>{
                this.props.update(item)
                this.setState({
                  isEditable:false
                })
                }}>保存</Button>
              &nbsp;
              <Button onClick={()=>this.cancel()}>取消</Button>
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
