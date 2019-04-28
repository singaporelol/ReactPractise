import React from "react";
import { Input,message,Modal,Button } from "antd";
import axios from 'axios';
export default class Addroleinfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.IsAddRoleModalVisible,
      loading:false
    };
  }
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.IsAddRoleModalVisible!== prevState.visible){
      return{
        visible:nextProps.IsAddRoleModalVisible
      }
    }
    return null
  }
  handlerChange=(e)=>{
    this.setState({
      RoleName:e.target.value
     })
  }
  handleCancel = () => {
    // this.setState({ visible: false });
    this.props.handlerShowAddRoleModal(false);
  }
  handleOk = () => {
    this.setState({ loading: true });
    axios.post('/api/addRole',{
        RoleName:this.state.RoleName
    })
    .then((data)=>{
      data.data.code===1 && message.success('添加成功');
      this.setState({ loading: false, RoleName:"" });
      this.props.handlerShowAddRoleModal(false);
      this.props.handleGetRoleList();
    })
    .catch(err=>{console.log(err)})
  }
  render() {
    return (
      <Modal
        visible={this.state.visible}
        title="新增用户"
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="back" onClick={this.handleCancel}>
            返回
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={this.state.loading}
            onClick={this.handleOk}
          >
            提交
          </Button>
        ]}
      >
        <label htmlFor="">角色名称</label>
        <Input
          value={this.state.RoleName}
          onChange={e => this.handlerChange(e)}
        />
      </Modal>
    );
  }
}
