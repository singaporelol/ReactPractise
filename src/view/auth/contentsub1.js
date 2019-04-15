import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
export default class Contentsub1 extends Component {
  render() {
    return (
      <div>
        <hr/>
        <h1>我是content sub1里面的标题</h1>
        下面这个button这个button，这在admin用户下面显示。
        <br></br>
        <Button>只在admin用户显示</Button>
        <h1>组件1结束</h1>
        <hr/>
      </div>
    )
  }
}
