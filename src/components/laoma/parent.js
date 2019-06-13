import React from "react";
import Child from "./child";
export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childList: [],
    };
  }
  getChild = (list) => {
    this.setState({
      childList: list
    });
  };
  render() {
    return (
      <div>
        <h1>我是父组件的内容</h1>
        <br />
        <h2>我是从子组件传过来的数组{this.state.childList}</h2>
        <Child getChild={this.getChild} />
      </div>
    );
  }
}
