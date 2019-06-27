import React from 'react';
import axios from 'axios';
import { Table, Button, Divider, Icon, Modal, message } from 'antd';
import EditModal from './editModal';
import AddModal from './addModal';
export default class UserInfo extends React.Component {
  constructor() {
    super();
    this.child = React.createRef();
    this.state = {
      editVisible: false,
      addVisible: false
    };
  }
  componentDidMount() {
    this.handleGetUserList();
  }
  handleGetUserList = () => {
    axios
      .get('/api/userinfo')
      .then(res => {
        // console.log(res.data);
        this.setState({
          dataSource: res.data.data,
          columns: [
            {
              title: '编号',
              dataIndex: 'Id',
              key: 'Id'
            },
            {
              title: '用户名',
              dataIndex: 'UserName',
              key: 'UserName'
            },
            {
              title: '编辑',
              render: record => {
                return (
                  <div style={{ fontSize: '25px', cursor: 'pointer' }}>
                    <Icon
                      type="edit"
                      onClick={() => {
                        console.log(record);
                        this.setState({
                          editVisible: true,
                          ...record
                        });
                      }}
                    />
                    <Divider type="vertical" />
                    <Icon type="delete" onClick={()=>{
                      console.log(this)
                      this.handlerDeleteOk(record)
                      
                    }}/>
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
  handlerDeleteOk=(record)=>{
    let Id=[record.Id];
    console.log(this);
    Modal.confirm({
      title:"Do you want to delete these items?",
      content:"press delete to delete",
      okText:"删除",
      onOk:()=>{
       return axios.delete('/api/deleteUserFormByIds',{params:{Id:JSON.stringify(Id)}})
        .then(res=>{
          res.data.code==1? message.success("删除成功"):message.error("删除失败")
          this.handleGetUserList();
        })
      }
    })
  }
  addUser = () => {
    this.setState({
      addVisible: true
    });
  };
  handlerEditOk = () => {
    let erronBlur = this.formRef.props.form.getFieldError('UserName');

    this.formRef.props.form.validateFields((err, val) => {
      if (!err && !erronBlur) {
        let editForm = this.formRef.props.form.getFieldsValue();
        axios.put('/api/editUserForm',{
          Id:this.state.Id,
          ...editForm
        }).then(res=>{
          if(res.data.code===1){
            message.success('修改成功');
            this.setState({
              editVisible: false
            })
            this.handleGetUserList();
          }
        })
      }
    });
  };
  handlerAddOk=()=>{
    let erronBlur=this.formAddRef.props.form.getFieldError('UserName');
    this.formAddRef.props.form.validateFields((err,val)=>{
      if (!err && !erronBlur) {
        let editForm = this.formAddRef.props.form.getFieldsValue();
        axios.post('/api/addUserForm',{
          ...editForm
        }).then(res=>{
          if(res.data.code===1){
            message.success('添加成功');
            this.setState({
              addVisible: false
            })
            this.formAddRef.props.form.setFields({
              UserName:{
                value:""
              },
              Password:{
                value:""
              }
            })
            this.handleGetUserList();
          }
        })
      }
    })
  }
  setTitle = () => {
    return (
      <Button
        type="primary"
        onClick={() => {
          this.addUser();
        }}
      >
        新增
      </Button>
    );
  };
  render() {
    return (
      <div>
        {/* 添加用户 */}
        <Modal
          title="新增"
          visible={this.state.addVisible}
          onOk={this.handlerAddOk}
          onCancel={() =>
            this.setState({
              addVisible: false
            })
          }>
          <AddModal
          wrappedComponentRef={form => {
            this.formAddRef = form;
          }}
          />
          
        </Modal>
        {/* 修改 */}
        <Modal
          title="修改"
          visible={this.state.editVisible}
          onOk={this.handlerEditOk}
          onCancel={() =>
            this.setState({
              editVisible: false
            })
          }
        >
          <EditModal
            {...this.state}
            wrappedComponentRef={form => {
              this.formRef = form;
              // form.props.form.setFieldsValue({
              //   UserName: this.state.UserName,
              //   Id:this.state.Id
              // })
            }}
          />
        </Modal>
        <Table
          dataSource={this.state.dataSource}
          columns={this.state.columns}
          title={() => this.setTitle()}
          rowKey="Id"
          rowSelection={{
            type: 'checkbox'
          }}
        />
      </div>
    );
  }
}
