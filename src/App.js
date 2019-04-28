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

export default class App extends Component {
  checkUserState=()=>{
    if(sessionStorage.getItem('APP_LOGIN_USER')){
      return true;
    }else{
      return false;
    }
  }
  render() {
    return (
      
        <Router>
          <Switch>
            <Route path="/" exact render={()=> <Redirect to="/app"></Redirect>}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/app" render={(props)=>{
              //校验用户是否登录：如果登入进到页面，还没有登录，返回登录页面
              if(this.checkUserState()){
                return <Home {...props}></Home>
              }else{
                sessionStorage.setItem('APP_LAST_URL',JSON.stringify(props.location))
                return <Redirect to="/login" ></Redirect>
              }

            }}></Route>
            <Route component={Empty}></Route>

          </Switch>
        </Router>
    )
  }
}
