import React from 'react' 
// import {createStore, applyMiddleware, combineReducers,compose} from 'redux';
// import thunk from 'redux-thunk'
import {Button} from 'react-bootstrap'
import store from './store'
import {ActionCreators} from './actions/NumAction'
import ChildComponent from './childComponent';



export default class Count extends React.Component {
  addNum=()=>{
    store.dispatch(ActionCreators.AddActtionCreator(1))
    let Num=store.getState().NumReducer;
    let age=this.state.age+1;
    this.setState({
      Num,
      age,
      visible:true
    })

  }
  minusNum=()=>{
    // store.dispatch(ActionCreators.MinusActionCreator(1))
    // let Num=store.getState().NumReducer;
    // this.setState({Num})
  }
  constructor(props) {
    super(props)
    this.state = {
      Num:store.getState().NumReducer,
      age:18,
      visible:false
    }
  }
  resetVisible=()=>{
    this.setState({
      visible:false
    })
  }
  render() {
    return (<div>
      <div>{this.state.Num}</div>
      <h2>我是Count组件计数器</h2>
      <div>{this.state.age}</div>
      <div>{this.state.visible===true?1:0}</div>
      <ChildComponent {...this.state} resetVisible={this.resetVisible}></ChildComponent>
      <Button onClick={()=>this.addNum()}>+1</Button> &nbsp;
      <Button onClick={()=>this.minusNum()}>-1</Button>
    </div>)
  }
}