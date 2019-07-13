import React, { Component } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { ActonCreator } from "./action";
const mapStateToProps = state => ({
  Name: "张三",
  Num: state.counterReducer,
  Userlist: state.userlistReducer,
});
const mapDispatchToProps = dispatch => ({
  addNum(num) {
    dispatch(ActonCreator.AddNumber(num));
  },
  minusNum(num) {
    dispatch(ActonCreator.MinusNumber(num));
  }
});

export class reactreduxcalculator extends Component {
  render() {
    return (
      <div>
        <p>这个当前组件定义的变量：{this.props.Name}</p>
        <p>这个是redux里面的数据：{this.props.Num}</p>
        <Button onClick={() => this.props.addNum(1)}>+1</Button>
        <Button onClick={() => this.props.minusNum(1)}>-1</Button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reactreduxcalculator);
