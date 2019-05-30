import React from "react";
import axios from "axios";
import { Table, Button, Divider, Icon, Modal, Tree, Row, Col } from "antd";
const { TreeNode } = Tree;

export default class MenuInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      UserMenu:JSON.parse(localStorage.getItem('USER_MENU'))
    };
  }
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  generateMenuList=(UserMenu)=>{
    return UserMenu.map((item,key)=>{
      if(item.ChildMenu.length>0){
       return <TreeNode title={item.ActionName} key={item.Id}>{this.generateMenuList(item.ChildMenu)}</TreeNode>
      }else{
        return <TreeNode title={item.ActionName} key={item.Id}></TreeNode>
      }
    })
  }
  render() {
    return (
      <div>
        <Row style={{ minHeight: "100vh" }}>
          {/* 菜单树 */}
          <Col span={6} style={{ backgroundColor: "#eee", minHeight: "100vh" }}>
            <div className="menu-header" style={{margin:"10px"}}>
              <Button type="primary" icon="plus" style={{marginRight:'15px'}}>添加顶级菜单</Button>
              <Button type="primary" icon="plus">添加子菜单</Button>
            </div>
            <Tree
              onSelect={this.onSelect}
            >
            {this.generateMenuList(this.state.UserMenu)}
            </Tree>
          </Col>
          <Col span={18} style={{ backgroundColor: "red" }}>
            ss
          </Col>
        </Row>
      </div>
    );
  }
}
