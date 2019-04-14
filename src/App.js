import React, { Component } from 'react';

import Count from './components/test/count'
//如果要改变一个reducer的值，需要使用dispath派发一个action
//action需要2个参数：
//1、type,通过type区分是对state进行什么操作。
//2、payload 传递的参数。


class App extends Component {

  constructor(){
    super();
    this.state={
      
    }
  }
  render() {
    return (
      <div>
        <Count></Count>
      </div>
    )
  }
  
  }
export default App

