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
            return <UserRow key={item.id} item={item} remove={this.props.remove} update={this.props.update}></UserRow>          })}
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
  update:(item)=>{
    dispatch(UserlistActionCreator.UpdateUser(item))
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
