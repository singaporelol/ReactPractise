import React, { Component } from 'react';
// import Count from './view/count';
// import {HashRouter, Route, Link} from 'react-router-dom'
// import Home from './components/home'
// import About from './components/about'
// import Product from './components/product'
// import NewUserList from './view/newUserList'
import {createStore, combineReducers,compose, applyMiddleware} from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'
//reducer, action, store
//创建reducer:
const counterRucer=function(state={count:1},action){
  switch(action.type){
    case "COUNT_ADD":
    return {
      ...state, count:state.count+1
    }
    default:
    return state;
  }
}
const  postReducer=function (state={list:[{title:'你好！'}]},action){
  switch(action.type){
    case "LOAD_POSTS":
    return{
      ...state, list:action.payload
    }
    default:
    return state;
  }
}

const rootReducer=combineReducers({
  counterRucer,
  postReducer
})

const store=createStore(rootReducer,compose(applyMiddleware(...[thunk]),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


//如果要改变一个reducer的值，需要使用dispath派发一个action
//action需要2个参数：
//1、type,通过type区分是对state进行什么操作。
//2、payload 传递的参数。


class App extends Component {

  constructor(){
    super();
    this.state={
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
    store.dispatch({
      type:'COUNT_ADD',
      payload:{}
    })
    this.setState({num:store.getState().counterRucer.count})
    console.log(store.getState())
  }
  render() {
    return (
      <div>
        {this.state.num}<br/>
        
        <button onClick={()=>this.AddNUm()}>+1</button>
        <button onClick={()=>this.getPost()}>请求数据</button>
      </div>
    )
  }
   
}
export default App

