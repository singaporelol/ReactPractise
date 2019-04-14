import React, { Component } from 'react'

export default class Login extends Component {
  loginClick=()=>{
    sessionStorage.setItem('APP_LOGIN_USER',JSON.stringify({Name:"aicoder", password:"123"}))
    console.log(this.props)
    let lastLocation=JSON.parse(sessionStorage.getItem('APP_LAST_URL'))
    if(lastLocation){
      sessionStorage.removeItem('APP_LAST_URL')
      this.props.history.push(lastLocation)
    }
     this.props.history.push('/app')
  }
  render() {
    return (
      <div>
        login<hr/>
        <button onClick={()=>this.loginClick()}>登录</button>
      </div>
    )
  }
}
