import React from 'react' 
import { createStore } from 'redux';
import { Button } from 'antd';

const NumCalculator = (state = 0, action) => {
  switch (action.type) {
    case 'ADD_NUM':
      return state+action.payload
    case 'MINUS_NUM':
      return state-action.payload
    default:
      return state
  }
}

const store=createStore(NumCalculator);

export default class Count extends React.Component {
  constructor(){
    super()
    this.state={
      Num:0
    }
  }
  AddNum=()=>{
    store.dispatch({type:"ADD_NUM",payload:1});
    this.setState({
      Num:store.getState()
    })
  }
  MinusNum=()=>{
    store.dispatch({type:"MINUS_NUM",payload:1})
    this.setState(prestate=>{
      return{
        Num:store.getState()
      }
    })
  }
  render(){
    return(<div>
      <h2>一个页面的redux案例，没有拆分reducer和action</h2>
      <p>{this.state.Num}</p>
      <Button onClick={()=>this.AddNum()}>+1</Button>
      <Button onClick={()=>this.MinusNum()}>-1</Button>
    </div>)
  }
}