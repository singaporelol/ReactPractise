import React from 'react' 
import UserInfo from '../../components/auth/userInfo'
import RoleInfo from '../../components/auth/roleInfo/roleInfo'
import {Route,NavLink,Redirect,Switch} from'react-router-dom'
import {
  Layout, Menu, Breadcrumb
} from 'antd';
const {
  Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;
export default class Auth extends React.Component {
  constructor() {

    super()
    this.state = {
      

    }
    
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  
  render() {
    return (
      
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          // collapsed={this.state.collapsed}
          // onCollapse={this.onCollapse}
          style={{minHeight:'100vh'}}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <NavLink to={`${this.props.match.path}/userInfo`} style={{textDecoration:"none"}}>用户管理</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
            <NavLink to={`${this.props.match.path}/roleInfo`} style={{textDecoration:"none"}}>角色管理</NavLink>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span>User</span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 560 }}>
            <Switch>
              <Route exact path={`${this.props.match.path}`}><Redirect to={`${this.props.match.path}/userInfo`}/></Route>
              <Route path={`${this.props.match.path}/userInfo`} component={UserInfo}></Route>
              <Route path={`${this.props.match.path}/roleInfo`} component={RoleInfo}></Route>
            </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Authentication System {new Date().getFullYear()} Created by Xueqian
          </Footer>
        </Layout>
      </Layout>
    );
  }
}