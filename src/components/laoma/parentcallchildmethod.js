import React, { Component } from 'react'
import Child from './child'
import {Button} from 'antd'

export default class parentcallchildmethod extends Component {
  constructor(props) {
    super(props)
    this.child=React.createRef();
    this.state = {
       
    }
  }
  onClick=()=>{
    
    this.child.current.getAlert();
  }
  callMethod=()=>{
    
  }
  render() {
    return (
      <div>
        <p>这是父组件，需要调用子组件的方法</p>
        <Button onClick={()=>this.onClick()}>点击调用子组件方法</Button>
        <hr/>
        <p>现在是子组件：</p>
        <Button onClick={()=>{this.callMethod()}}>调用组件方法</Button>
        <Child ref={this.child}></Child>
      </div>
    )
  }
}
