import React, { Component } from 'react'
import { connect } from 'react-redux'
import {ActionCreators} from '../actions/NumAction'

export class NewCount extends Component {
 
  render() {
    return (
      <div>
        <p>这是来自我们自己的状态：{this.props.WebSite}</p>
        <p>拿到redux里面的数据状态：{this.props.Num}</p>
        <button onClick={()=>this.props.addNum(1)}>+1</button>
        <button onClick={()=>this.props.minusNum(1)}>-1</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  WebSite:'aicoder.com',
  Num:state.Num
})
//dispatch 是redux中的分发action的api函数
function mapDispatchToProps(dispatch) {
  return{
    addNum:(num)=>{
      dispatch(ActionCreators.AddActtionCreator(num))
    },
    minusNum:(num)=>{
      dispatch(ActionCreators.MinusActionCreator(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCount)
