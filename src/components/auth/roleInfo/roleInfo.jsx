import React from "react";
import axios from "axios";
import { Table, Button, Icon, Modal, Input, message } from "antd";
import Addroleinfo from "./addroleinfo";
const confirm=Modal.confirm;

export default class RoleInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      RoleName: "",
      IsAddRoleModalVisible: false,
      IsEditRoleMoalVisible: false,
      RoleInfo: {},
      test:1
    };
  }
  componentDidMount() {
    this.handleGetRoleList();
  }
  handleGetRoleList = () => {
    axios
      .get("/api/role")
      .then(res => {
        console.log(res.data);
        this.setState({
          dataSource: res.data.data,
          columns: [
            {
              title: "编号",
              dataIndex: "Id",
              key: "Id"
            },
            {
              title: "角色名称",
              dataIndex: "RoleName",
              key: "RoleName"
            },
            {
              title: "编辑",
              render: record => {
                return (
                  <div>
                    <Icon
                      type="edit"
                      style={{
                        fontSize: "25px",
                        marginRight: "20px",
                        marginLeft: "-13px",
                        cursor: "pointer"
                      }}
                      onClick={() => this.handlerEdit(record)}
                    />
                    <Icon
                      type="delete"
                      style={{ fontSize: "25px", cursor: "pointer" }}
                      onClick={()=>this.handlerDelete(record)}
                    />
                  </div>
                );
              }
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  handlerEdit = record => {
    console.log(record);
    this.setState({
      RoleInfo: { ...record },
      IsEditRoleMoalVisible: true
    });
  };
  handlerShowAddRoleModal = show => {
    show === true
      ? this.setState({
          IsAddRoleModalVisible: true
        })
      : this.setState({
          IsAddRoleModalVisible: false
        });
  };
  setTitle = () => {
    return (
      <Button onClick={() => this.handlerShowAddRoleModal(true)} type="primary">
        添加新角色
      </Button>
    );
  };
  handleCancel = () => {
    this.setState({
      IsEditRoleMoalVisible: false
    });
  };
  handleEditOk=()=>{
    axios
      .put("/api/editRole",{
        ...this.state.RoleInfo
      })
      .then(res => {
        res.data.code===1 && message.success('修改成功')
        this.handleCancel();
        this.handleGetRoleList();
      })
      .catch(err => {
        console.log(err);
      });
  }
  bindInputValue=(e)=>{
    // console.log(e.target.value);
    let {RoleInfo}=this.state;
    
    // console.log(RoleInfo)
    this.setState({
      RoleInfo:{...RoleInfo,[e.target.name]:e.target.value}
    })
  }
  handlerDelete=(record)=>{
    confirm({
      title:"确定要删除该用户权限吗？",
      onOk:()=>{
        axios.delete('/api/deleteRole',{
          params:{
            ...record
          }
        }).then(res=>{
          res.data.code===1 && message.success('删除成功')
          this.handleGetRoleList();
        }).catch(err=>console.log(err))
        this.handleGetRoleList();
      },
      onCancel(){}
    })
  }
  render() {
    console.log(this.state.RoleInfo);
    return (
      <div>
        {/* 使用了把Modal组件定义到了Addroleinfo组件内部的方法。
        通过属性和回调函数进行父子传值。并且使用getDerivedStateFromProps方法进行子组件的状态更新 */}
        <Addroleinfo
          {...this.state}
          handlerShowAddRoleModal={this.handlerShowAddRoleModal}
          handleGetRoleList={this.handleGetRoleList}
        />
        {/* 编辑用户模态框 */}
        <Modal
          title="编辑角色名称"
          visible={this.state.IsEditRoleMoalVisible}
          onOk={this.handleEditOk}
          onCancel={this.handleCancel}
        >
          <form>
            <label htmlFor="">角色名称：</label>
            <Input name="RoleName" value={this.state.RoleInfo["RoleName"]} onChange={(e)=>this.bindInputValue(e)}/>
          </form>
        </Modal>
        
        <Table
          dataSource={this.state.dataSource}
          columns={this.state.columns}
          title={() => this.setTitle()}
          rowKey="Id"
          rowSelection={{
            type: "checkbox"
          }}
        />
      </div>
    );
  }
}
