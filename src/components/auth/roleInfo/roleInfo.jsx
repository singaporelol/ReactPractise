import React from "react";
import axios from "axios";
import { Table, Button, Icon, Modal, Input, message,Divider } from "antd";
import Addroleinfo from "./addroleinfo";
const confirm=Modal.confirm;

export default class RoleInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      RoleName: "",
      IsAddRoleModalVisible: false,
      IsEditRoleModalVisible: false,
      RoleInfo: {},
      selectedRowKeys:[],
      hasSelected:false,
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
                console.log(record)
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
      IsEditRoleModalVisible: true
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
      <div>
        <Button onClick={() => this.handlerShowAddRoleModal(true)} type="primary">
          添加新角色
        </Button>
        <Divider type="vertical"></Divider>
        <Button disabled={!this.state.hasSelected} type="danger" icon="delete" onClick={() => this.handlerDeleteRange()}>
          删除
        </Button>
      </div>
    );
  };
  handleCancel = () => {
    this.setState({
      IsEditRoleModalVisible: false
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
        // this.handleGetRoleList();
      },
      onCancel(){}
    })
  }
  handlerDeleteRange=()=>{
    confirm({
      title:"确定要删除所选中的用户权限吗？",
      onOk:()=>{
        axios.delete('/api/deleteRoles',{
          params:{
            ids:JSON.stringify(this.state.selectedRowKeys)
          }
        }).then(res=>{
          res.data.code===1 && message.success('删除成功')
          this.setState({
            selectedRowKeys:[],
            hasSelected:false
          })
          this.handleGetRoleList();
        }).catch(err=>console.log(err))
        this.handleGetRoleList();
      },
      onCancel(){}
    })
  }
  rowSelectOnchange=(selectedRowKeys,selectedRows)=>{
    const hasSelected=selectedRowKeys.length>0;
    this.setState({
      hasSelected,
      selectedRowKeys:[...selectedRowKeys]
    })
  }
  render() {
    // console.log(this.state.selectedRowKeys);
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
          visible={this.state.IsEditRoleModalVisible}
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
            type: "checkbox",
            selectedRowKeys:this.state.selectedRowKeys,
            onChange: this.rowSelectOnchange
          }}
        />
      </div>
    );
  }
}
