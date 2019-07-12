import React, { Component } from 'react'
import {Button} from 'antd'
import {NumAction} from './action'
import store from './store'
export default class reactredux extends Component {
  constructor(){
    super()
    this.state={
      num:0
    }
  }
  Add=()=>{
    store.dispatch(NumAction(1))
    this.setState({
      num:store.getState().counterRucer
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.num}</h2>
        <Button onClick={()=>this.Add()}>+1按钮</Button>
      </div>
    )
  }
}
