import React, { Component } from 'react'
import store from './store'
import {UserlistActionCreator} from './action'
import {Table, Button} from 'react-bootstrap';
export default class userlist extends Component {
  constructor(){
    super()
    this.state={
      userlist:store.getState().userlistReducer
    }
    this.state.unsubscribe = store.subscribe(() => {
      this.setState({
        userlist: store.getState().userlistReducer
      })
    });
  }
  componentWillUnmount() {
    this.state.unsubscribe(); // 移除监听 
    
  }
  componentDidMount(){
    // store.dispatch(UserlistActionCreator.AsyLoadUser("",this))
      store.dispatch(UserlistActionCreator.AsyLoadUser())
    //  this.setState({
    //    userlist:store.getState().userlistReducer
    //  })
  }
  remove=(id)=>{
    
    console.log(id);
    store.dispatch(UserlistActionCreator.AsyRemoveUser(id))
    // this.setState({
    //   userlist:store.getState().userlistReducer
    // })
  }
  render() {
    return (
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
          {this.state.userlist.map((item,index)=>{
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.UserName}</td>
                <td>{item.Address}</td>
                <td>{item.Phone}</td>
                <td>{item.Del?"是":"否"}</td>
                <td>{item.Remark}</td>
                <td>
                  <Button onClick={()=>this.remove(item.id)}>删除</Button>
                  &nbsp;
                  <Button onClick={()=>{}}>修改</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}
 