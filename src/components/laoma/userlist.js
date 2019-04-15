import  React  from "react";
import store from './store'
import axios from 'axios';
import {UserlistAction} from './actions/UserlistAction'
export default class Userlist extends React.Component {
  constructor(){
    super()
    this.state={}
  }
  render() {
    //http://yapi.demo.qunar.com/mock/7378/api/userlist
    axios.get('http://yapi.demo.qunar.com/mock/7378/api/userlist').then(res=>{
      store.dispatch(UserlistAction.loadUserAction(res.data.data.userlist));
    })
    return <div>UserList</div>;
  }
}
