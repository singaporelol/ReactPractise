import React from 'react' 
import store, {ActionCreators} from './../store/index'
export default class Count extends React.Component {
  constructor() {

    super()
    this.state = {
      Num:store.getState()
    }
  }
  addNum=()=>{
    store.dispatch(ActionCreators.AddActionCreator(1))
    this.setState({Num:store.getState()})
  }
  minusNum=()=>{
    store.dispatch(ActionCreators.MinusActionCreater(1))
    this.setState({Num:store.getState()})
  }
  render() {
    return (<div>
      <h3>Store中的数据是：{this.state.Num}</h3>
      <button onClick={this.addNum}>+1</button>
      <button onClick={this.minusNum}>-1</button>
    </div>)
  }
}