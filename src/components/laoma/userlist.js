import  React  from "react";
import store from './store'
import axios from 'axios';
import {UserlistAction} from './actions/UserlistAction'
import {Table} from 'react-bootstrap'
export default class Userlist extends React.Component {
  constructor(){
    super()
    this.state={
      userlist:[],
    }
  }
  componentDidMount(){
    //http://yapi.demo.qunar.com/mock/7378/api/userlist
    axios.get('http://yapi.demo.qunar.com/mock/7378/api/userlist').then(res=>{
      store.dispatch(UserlistAction.loadUserAction(res.data.data.userlist))
      console.log(store.getState().UserList)
      this.setState({
        userlist:store.getState().UserList
      })
    })
  }
  
  render() {
    
    return <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>用户名</th>
            <th>地址</th>
            <th>电话</th>
            <th>是否删除</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          {this.state.userlist.map((item,key)=>{
            
           return <tr key={item.Id}>
            <td>{item.Id}</td>
            <td>{item.UserName}</td>
            <td>{item.Address}</td>
            <td>{item.Phone}</td>
            <td>{item.Del?'是':'否'}</td>
            <td>{item.Remark}</td>
          </tr>
          })}
        </tbody>
      </Table>
    
    </div>
  }
}
