import React from 'react' 
import {createStore, applyMiddleware, combineReducers,compose} from 'redux';
import thunk from 'redux-thunk'
import {Button} from 'react-bootstrap'
import store from './store'
import {ActionCreators} from './actions/NumAction'



export default class Count extends React.Component {
  addNum=()=>{
    store.dispatch(ActionCreators.AddActtionCreator(1))
    let Num=store.getState().NumReducer;
    this.setState({Num})
  }
  minusNum=()=>{
    store.dispatch(ActionCreators.MinusActionCreator(1))
    let Num=store.getState().NumReducer;
    this.setState({Num})
  }
  constructor() {
    super()
    this.state = {
      Num:store.getState().NumReducer
    }
  }
  render() {
    return (<div>
      <h2>我是Count组件计数器</h2>
      <div>{this.state.Num}</div>
      <Button onClick={()=>this.addNum()}>+1</Button> &nbsp;
      <Button onClick={()=>this.minusNum()}>-1</Button>
    </div>)
  }
}