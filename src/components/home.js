import React from 'react' 
import {Link,Route} from 'react-router-dom';
import Product from './product'
export default class Home extends React.Component {
  constructor() {

    super()
    this.state = {}
  }
  componentDidMount(){
    this.setState()
  }
  render() {
    return <div>
      Home组件开始
      <br/>
      <Link to="/home/product">链接去product组件</Link>
      <br/>
      {this.props.children}
      {/* <Route  path="/home/product" component={Product}></Route> */}
      <br/>
      Home组件结束
    </div>
  }
}