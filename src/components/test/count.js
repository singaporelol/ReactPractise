import React from 'react' 
import axios from 'axios'
import store from './../../redux/store'
import {NumAction} from './../../redux/action'
export default class Count extends React.Component {
  constructor() {

    super()
    this.state = {
      num:store.getState().counterRucer.count
    }
  }
  getPost=()=>{
    return axios.get('https://jsonplaceholder.typicode.com/posts').then(data=>{
      store.dispatch((dispatch)=>{
        dispatch({
          type:"LOAD_POSTS",
          payload:data
        })
      }) 
      // store.dispatch({type:"LOAD_POSTS",payload:data.data})
    })
  }
    AddNUm=()=>{
      store.dispatch(NumAction)
      this.setState({num:store.getState().counterRucer.count})
      console.log(store.getState())
    }
  render() {
    return (<div>
      {this.state.num}<br/>
        
        <button onClick={()=>this.AddNUm()}>+1</button>
        <button onClick={()=>this.getPost()}>请求数据</button>
      
    </div>)
  }
}