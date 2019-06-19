import React, { Component } from 'react';

export default class InvokeChild extends Component {
  render() {
    return (
      <div>
        <button onClick={this.click}> 父组件按钮 </button>
        <br/>
        <Child onRef={this.onRef} />
      </div>
    );
  }
  onRef = ref => {
    this.child = ref;
  };

  click = e => {
    this.child.myName();
  };
}
class Child extends Component {
  componentDidMount() {
    this.props.onRef(this);
  }

  myName = () => alert('xiaohesong');

  render() {
    return '我是子组件的内容';
  }
}
