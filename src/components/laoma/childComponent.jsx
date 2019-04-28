import React from 'react' 
import {Modal} from 'antd'
export default class ChildComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      visible:this.props.visible
    }
  }
  static getDerivedStateFromProps(nextPros,preState){
    console.log("我是 当前的属性"+ nextPros.visible)
    console.log("我是 之前的State"+ preState.visible)
    if(nextPros.visible !== preState.visible){
      return{
        visible:nextPros.visible
      }
    }
    return null;
  }
  
  // componentWillReceiveProps(nextPros){
  //   console.log(nextPros.visible);
  //   console.log(this.state.visible);
  //     if(nextPros.visible !== this.state.visible){
  //       console.log(1)
  //       this.setState({
  //         visible:nextPros.visible
  //       })
        
  //   }
  // }
  
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
    this.props.resetVisible()
  }
  handleOk=()=>{
    this.setState({visible:false})
    this.props.resetVisible()
  }
  render() {
    console.log(this.state.visible)
    return (
      <div>
        我是从父组件传递过来的:小明今年{this.props.age}岁
        <Modal 
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          >
          我是从父组件传递过来的:小明今年{this.props.age}岁
      </Modal>
      </div>
    )
  }
}