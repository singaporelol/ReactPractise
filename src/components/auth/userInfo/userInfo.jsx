import React from 'react' 
import axios from 'axios'
import {
   Table,Button, Divider,Icon,Modal
} from 'antd';
import EditModal from './editModal';
export default class UserInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      editVisible:false,
      addVisible:false
    }
  }
  componentDidMount(){
    this.handleGetUserList();
  }
  handleGetUserList=()=>{
    axios.get('/api/userinfo')
    .then((res)=>{
      
      // console.log(res.data);
      this.setState({
        dataSource:res.data.data,
        columns:[{
          title:"编号",
          dataIndex:"Id",
          key:"Id"
        },{
          title:"用户名",
          dataIndex:"UserName",
          key:"UserName"
        },{
          title:"编辑",
          render:record=>{
            return (<div style={{fontSize:"25px",cursor:"pointer"}}>
              <Icon type="edit" onClick={()=>{
                // console.log(record);
                this.setState({
                  editVisible:true,
                  ...record
                })}}></Icon>
              <Divider type="vertical"></Divider>
              <Icon type="delete"></Icon>
            </div>)
          }
        }]
      })
    }).catch(err=>{
      console.log(err)
    })
  }
  addUser=()=>{
    this.setState({
      addVisible:true
    })
  }
  handlerEditOk=()=>{
    let err=this.formRef.props.form.getFieldsError()
    console.log(err)
    // this.formRef.props.form.validateFields((err,values)=>{
    //   if(!err){
    //     console.log(values);
    //   }
    // });
  }
  setTitle=()=>{
    return <Button type="primary" onClick={()=>{this.addUser()}}>新增</Button>
   }
  render() {
    
    return (
    <div>
      {/* 添加用户 */}
      <Modal
        title="新增"
        visible={this.state.addVisible}
        onOk={this.handlerAddOk}
        onCancel={()=>this.setState({
          addVisible:false
        })}
      >
      </Modal>
      {/* 修改 */}
      <Modal
        title="修改"
        visible={this.state.editVisible}
        onOk={this.handlerEditOk}
        onCancel={()=>this.setState({
          editVisible:false
        })}
      >
       <EditModal 
        {...this.state}
        wrappedComponentRef={form=>{
          this.formRef=form
        }}
       ></EditModal>
      </Modal>
      <Table 
        dataSource={this.state.dataSource} 
        columns={this.state.columns}
        title={()=>this.setTitle()}
        rowKey='Id'
        rowSelection={{
          type:"checkbox"
        }}
      
      >
    </Table>
    </div>
    )
  }
}