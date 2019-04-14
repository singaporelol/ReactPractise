import React, { Component } from 'react';
import { HashRouter as Router, Route, Link,Switch } from 'react-router-dom'

// import Count from './components/test/count'
import Home from './view/home'
import About from './view/about'
import Product from './view/product'
import Empty from './view/empty'
class App extends Component {
  constructor(){
    super();
    this.state={
      
    }
  }
  render() {
    return (
      <div>
        <h1>aicoder.com</h1><hr/>
        <Router>
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/product">产品</Link>
          <hr/>
          <Switch>
            <Route path="/home" component={Home} ></Route>
            {/* <Route path="/about" component={About} ></Route> */}
            <Route path="/about" render={(props)=>{
              return <About {...props}></About>
            }} ></Route>
            <Route path="/product" children={(props)=>{
              // console.log(props)
              return props.match?(<Product {...props}/>):<p>没有匹配</p>
            }} ></Route>
            <Route component={Empty}></Route>
          </Switch>
        </Router>
        {/* <Count>这个是Count组件里面有redux的代码实现</Count> */}
      </div>
    )
  }
  
  }
export default App

