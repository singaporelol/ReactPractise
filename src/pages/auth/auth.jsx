import React from 'react' 
import UserInfo from '../../components/auth/userInfo/userInfo'
import RoleInfo from '../../components/auth/roleInfo/roleInfo'
import UserRole from '../../components/auth/roleInfo/userRole'
import Action from '../../components/auth/actionInfo/action'
import MenuInfo from '../../components/auth/menuInfo/menuInfo'
import {Route,NavLink,Redirect,Switch} from'react-router-dom'
import {Consumer} from '../../../src/App'
import {
  Layout, Menu, Breadcrumb
} from 'antd';
const {
  Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;
export default class Auth extends React.Component {
  constructor(props, context) {
    console.log(context);
    super(props)
    this.state = {
        // UserMenu:JSON.parse(localStorage.getItem('USER_MENU'))
        // UserMenu:context.MenuList
    }
    
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  GenerateUserMenu=(UserMenu)=>{
    return UserMenu.map((item,key)=>{
      if(item.ChildMenu.length>0){
       return (<SubMenu
        key={item.Id}
        title={<span>{item.Title}</span>}
      >
        {this.GenerateUserMenu(item.ChildMenu)}
      </SubMenu>)
      }else{
       return (<Menu.Item key={item.Id}>
            <NavLink to={`${this.props.match.path}${item.Url}`} style={{textDecoration:"none"}}>{item.Title}</NavLink>
        </Menu.Item>)
      }
    })
  }
  
  render() {
    // console.log((this.state.UserMenu))
      return <Consumer>
        {context=>{
          console.log(context);
         return (<Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            // collapsed={this.state.collapsed}
            // onCollapse={this.onCollapse}
            style={{minHeight:'100vh'}}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              {/* <Menu.Item key="1">
                <NavLink to={`${this.props.match.path}userInfo`} style={{textDecoration:"none"}}>用户管理</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
              <NavLink to={`${this.props.match.path}role`} style={{textDecoration:"none"}}>角色管理</NavLink>
              </Menu.Item>
              <Menu.Item key="3">
              <NavLink to={`${this.props.match.path}action`} style={{textDecoration:"none"}} >权限管理</NavLink>
              </Menu.Item> */}
              {/* 动态加载菜单 */}
              {/* {this.GenerateUserMenu(this.state.UserMenu)} */}
              {this.GenerateUserMenu(context.MenuList)}
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
              <Route path={`${this.props.match.path}/menu`} component={MenuInfo}></Route>
              <Route path={`${this.props.match.path}/userInfo`} component={UserInfo}></Route>
              <Route path={`${this.props.match.path}/role`} component={RoleInfo}></Route>
              <Route path={`${this.props.match.path}/action`} component={Action}></Route>
              <Route path={`${this.props.match.path}/userrole`} component={UserRole}></Route>
            </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Authentication System {new Date().getFullYear()} Created by Xueqian
          </Footer>
        </Layout>
        </Layout>
         )}}
      </Consumer>
    
  }
}