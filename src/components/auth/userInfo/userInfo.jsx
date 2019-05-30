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
          title:"角色名称",
          dataIndex:"RoleName",
          key:"RoleName"
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
  setTitle=()=>{
    return <Button type="primary">新增</Button>
   }
  render() {
    
    return (
    <div>
      <Modal
        title="修改"
        visible={this.state.editVisible}
        onOk={this.handlerEditOk}
        onCancel={()=>this.setState({
          editVisible:false
        })}
      >
       <EditModal {...this.state}></EditModal>
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