import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Table,Button} from 'react-bootstrap'
import {UserlistActionCreator, ActonCreator} from './action'
import UserRow from './userrow'
export class reactreduxuserlist extends Component {
  constructor(props){
    super(props)
    this.props.LoadUser()
  }
  componentDidMount(){
    // this.props.LoadUser()
  }
  render() {
    return (
      <div>
        <h1>react-redux 用户列表增删改查</h1>
        <h1>{this.props.Num}</h1><Button onClick={()=>this.props.add()}>加1</Button>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>用户名</th>
            <th>地址</th>
            <th>电话</th>
            <th>是否删除</th>
            <th>备注</th>
            <th>编辑</th>
          </tr>
        </thead>
        <tbody>
          {this.props.userlist.map((item,index)=>{
            return <UserRow key={index} item={item} remove={this.props.remove} edit={this.props.edit}></UserRow>
          //   return<tr>
          //   <td>{item.id}</td>
          //   <td>{item.UserName}</td>
          //   <td>{item.Address}</td>
          //   <td>{item.Phone}</td>
          //   <td>{item.Del?"是":"否"}</td>
          //   <td>{item.Remark}</td>
          //   <td>
          //     <Button onClick={()=>{
          //       this.setState({
          //         isEditable:true
          //       })
          //       this.props.edit(item.id)
          //       }}>修改</Button>
          //     &nbsp;
          //     <Button onClick={()=>{
          //       this.props.remove(item.id)
          //     }}>删除</Button>
          //   </td>
          // </tr>
          })}
        </tbody>
      </Table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    userlist:state.userlistReducer,
    Num:state.counterReducer
})

const mapDispatchToProps = (dispatch)=>({
  LoadUser:()=>{
    dispatch(UserlistActionCreator.AsyLoadUser())
  },
  edit:(id)=>{
    console.log(id)
  },
  remove:(id)=>{
    console.log(id)
    // debugger;
    dispatch(UserlistActionCreator.RemoveUser(id))
  },
  add:()=>{
    dispatch(ActonCreator.AddNumber(1))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(reactreduxuserlist)
