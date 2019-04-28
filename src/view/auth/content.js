import React, { Component } from 'react'

import Contentsub1 from './contentsub1'
import Contentsub2 from './contentsub2'

export default class Content extends Component {
  render() {
    return (
      <div>
        <h1>Content的内容里面有2个组件</h1>
        <p>contentsub1组件:</p>
        <Contentsub1></Contentsub1>
        <Contentsub2></Contentsub2>
      </div>
    )
  }
}
