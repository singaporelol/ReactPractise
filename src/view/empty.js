import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Empty extends Component {
  render() {
    return (
      <div>
        Empty
        <Link to="/">回到首页</Link>
      </div>
    )
  }
}
