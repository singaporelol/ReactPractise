import React from 'react' 
import {Button, message} from 'antd'
export default class Child extends React.Component {
  constructor(props) {

    super(props)
    this.state = {
      list:[1,2,3]
    }
  }
  PassToParent=()=>{
    this.props.getChild(this.state.list);
  };
  getAlert=()=>{
    message.success("调用了子类的方法");
  }
  render() {
    return (<div>
      <h2>我是子组件的内容</h2>
      <Button onClick={()=>{this.PassToParent()}}>传送数据到父</Button>
    </div>)
  }
}
export const getAlert=Child.getAlert;