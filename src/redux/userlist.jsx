import React, { Component } from 'react'
import store from './store'
import {Table, Button} from 'react-bootstrap';
export default class userlist extends Component {
  constructor(){
    super()
    this.state={
      userlist:[]
    }
  }
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>用户名</th>
            <th>地址</th>
            <th>电话</th>
            <th>是否删除</th>
            <th>备注</th>
            <th>编辑</th>
          </tr>
        </thead>
      </Table>
    )
  }
}
