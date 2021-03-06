import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Login from './view/login';
import Empty from './view/empty';
import Home from './view/home';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
export const {Provider, Consumer} = React.createContext()

export default class App extends Component {
  constructor(){
    super()
    
    this.state={
      userAllAction:null
    }
  }
  checkUserState=()=>{
    if(sessionStorage.getItem('APP_LOGIN_USER')){
      return true;
    }else{
      return false;
    }
  }
  getUserAllAction=(userAllAction)=>{
    this.setState({
      userAllAction:{...userAllAction}
    })
  }
  render() {
    console.log(this.state.userAllAction)
    return (
      
        <Router>
          <Switch>
            <Route path="/" exact render={()=> <Redirect to="/app"></Redirect>}></Route>
            <Route path="/login" render={
              (props)=>{
                return <Login {...props} getUserAllAction={this.getUserAllAction}/>
              }}/>
            <Route path="/app" render={(props)=>{
              //校验用户是否登录：如果登入进到页面，还没有登录，返回登录页面
              if(this.checkUserState()){
                //  debugger;
                if(this.state.userAllAction){
                  return <Provider value={this.state.userAllAction}><Home {...props}/></Provider>
                }
                 axios.get("/api/GetUserAuth", {
                  params: {
                    name: "admin",
                    password: "123"
                  }
                }).then(result=>{
                  this.setState({userAllAction: JSON.parse(result.data.userAllAction)})
                });
              }else{
                sessionStorage.setItem('APP_LAST_URL',JSON.stringify(props.location))
                return <Redirect to="/login" ></Redirect>
              }

            }}></Route>
            <Route path="/demo" render={props=>{
              return <Provider value={this.state.userAllAction}><Home {...props}/></Provider>
            }}/>
            <Route component={Empty}></Route>

          </Switch>
        </Router>
    )
  }
}
