import React from 'react' 
import axios from 'axios'
import {
   Table,Button
} from 'antd';
import Addroleinfo from './roleInfo/addroleinfo';

export default class UserInfo extends React.Component {
  constructor() {

    super()
    this.state = {}
  }
  componentDidMount(){
    this.handleGetUserList();
  }
  handleGetUserList=()=>{
    axios.get('/api/userinfo')
    .then((res)=>{
      console.log(res.data);
      this.setState({
        dataSource:res.data.data,
        columns:[{
          title:"编号",
          dataIndex:"Id",
          key:"Id"
        },{
          title:"角色名称",
          dataIndex:"RoleName",
          key:"RoleName"
        },{
          title:"用户名",
          dataIndex:"UserName",
          key:"UserName"
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
      <Addroleinfo></Addroleinfo>
      <Table 
        dataSource={this.state.dataSource} 
        columns={this.state.columns}
        title={()=>this.setTitle()}
        rowKey='Id'
      >
    </Table>
    </div>
    )
  }
}