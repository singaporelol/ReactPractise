import React from 'react' 

import {Redirect} from 'react-router-dom'
export default class About extends React.Component {
  constructor() {

    super()
    this.state = {
      login:true
    }
  }
  render() {
    return (<div>
      {console.log(this.props)}
      <input type="button" value="登出跳转到首页" onClick={()=>this.setState({login:false})}></input>
      {!this.state.login &&<Redirect path="/home"></Redirect>}
    </div>)
  }
}