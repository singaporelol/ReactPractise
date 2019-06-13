import React from 'react' 
import {Button} from 'antd'
export default class Child extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
      list:[1,2,3]
    }
  }
  PassToParent=()=>{
    this.props.getChild(this.state.list);
  }
  render() {
    return (<div>
      <h2>我是子组件的内容</h2>
      <Button onClick={()=>{this.PassToParent()}}>传送数据到父</Button>
    </div>)
  }
}