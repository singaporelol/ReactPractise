import React, { Component } from 'react'

export default class productdetail extends Component {
  render() {
    return (
      <div>
        产品详情：{this.props.match.params.id}
        {console.log(this.props.match.params.id)}
      </div>
    )
  }
}
