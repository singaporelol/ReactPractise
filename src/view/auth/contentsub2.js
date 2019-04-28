import React from 'react' 
import {Button} from 'react-bootstrap'

export default class Contentsub2 extends React.Component {
  constructor() {

    super()
    this.state = {}
  }
  render() {
    return (<div>

      <h1>我是Content sub2的标题</h1>
      <Button variant="outline-danger">在所有页面都显示</Button>
    </div>)
  }
}