import React from "react";
import axios from "axios";
import { Table, Button, Icon, Modal, Input, message, Divider,Radio } from "antd";

export default class Action extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IsAddActionModalVisible:false,
      ParentId:1,
      ActionName:"",
      Url:"",
      IsMenu:false
    };
  }
  componentDidMount(){
    this.handleGetActionList();
  }
  handleGetActionList = () => {
    axios
      .get("/api/action")
      .then(res => {
        // console.log(res.data);
        this.setState({
          dataSource: res.data.data,
          columns: [
            {
              title: "编号",
              dataIndex: "Id",
              key: "Id"
            },
            {
              title: "父级ID",
              dataIndex: "ParentId",
              key: "ParentId"
            },
            {
              title: "权限名称",
              dataIndex: "ActionName",
              key: "ActionName"
            },
            {
              title: "Url",
              dataIndex: "Url",
              key: "Url"
            },
            {
              title: "是否菜单",
              dataIndex: "IsMenu",
              key: "IsMenu",
              render:(IsMenu)=>{
                return IsMenu===true?'是':'否'
              }
            },
            {
              title: "编辑",
              render: record => {
                // console.log(record)
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
  handlerShowAddActionModal = show => {
    show === true
      ? this.setState({
          IsAddActionModalVisible: true
        })
      : this.setState({
          IsAddActionModalVisible: false
        });
  };
  handleAddActionOk=()=>{
    this.setState({ loading: true });
    axios.post('/api/addAction',{
        ParentId:this.state.ParentId,
        ActionName:this.state.ActionName,
        Url:this.state.Url,
        IsMenu:this.state.IsMenu
    })
    .then((data)=>{
      data.data.code===1 && message.success('添加成功');
      this.setState({ loading: false,ParentId:0, ActionName:"", Url:"",IsMenu:false });
      this.handlerShowAddActionModal(false);
      this.handleGetActionList();
      axios
      .get("/api/GetUserAuth", {
        params: {
          name: JSON.parse(sessionStorage.getItem("APP_LOGIN_USER")).UserName,
          password: JSON.parse(sessionStorage.getItem("APP_LOGIN_USER")).Password
        }
      }).then(result => {
        localStorage.removeItem("USER_MENU");
        localStorage.setItem("USER_MENU", result.data.userMenu);
      })
    })
    .catch(err=>{console.log(err)})
  }
  handleAddActionCancel=()=>{
    this.setState({
      IsAddActionModalVisible: false
    });
  }
  handlerInputValue=(e)=>{
    // console.log(e.target);
    this.setState({
      [e.target.name]:e.target.value,
    })
  }
  setTitle = () => {
    return (
      <div>
        <Button onClick={() => this.handlerShowAddActionModal(true)} type="primary">
          添加新权限
        </Button>
        <Divider type="vertical"></Divider>
        <Button disabled={!this.state.hasSelected} type="danger" icon="delete" onClick={() => this.handlerDeleteRange()}>
          删除
        </Button>
      </div>
    );
  };
  render() {
    // console.log(this.state);
    return (
      <div>
        <Modal
        visible={this.state.IsAddActionModalVisible}
        title="新增权限"
        onOk={this.handleAddActionOk}
        onCancel={this.handleAddActionCancel}
        footer={[
          <Button key="back" onClick={this.handleAddActionCancel}>
            返回
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={this.state.loading}
            onClick={this.handleAddActionOk}
          >
            提交
          </Button>
        ]}
      >
        <label htmlFor="">父级ID</label>
        <Input
          value={this.state.ParentId}
          name="ParentId"
          onChange={e => this.handlerInputValue(e)}
        />
        <label htmlFor="">权限名称</label>
        <Input
          value={this.state.ActionName}
          name="ActionName"
          onChange={e => this.handlerInputValue(e)}
        />
        <label htmlFor="">Url</label>
        <Input
          value={this.state.Url}
          name="Url"
          onChange={e => this.handlerInputValue(e)}
        />
        <label htmlFor="">是否菜单</label>
        <Radio.Group value={this.state.IsMenu} name="IsMenu" onChange={e=>this.handlerInputValue(e)}>
          <Radio value={true}>是</Radio>
          <Radio value={false}>否</Radio>
        </Radio.Group>
        {/* <Input
          value={this.state.IsMenu}
          name="IsMenu"
          onChange={e => this.handlerInputValue(e)}
        /> */}
        
      </Modal>
      <Table
        dataSource={this.state.dataSource}
        columns={this.state.columns}
        title={() => this.setTitle()}
        rowKey="Id" 
        rowSelection=
        {{
          type: "checkbox",
          selectedRowKeys: this.state.selectedRowKeys,
          onChange: this.rowSelectOnchange
        }}/>
        
      </div>
    );
  }
}
