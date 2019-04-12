import React, { Component } from 'react'
import { connect } from 'react-redux'

export class NewUserList extends Component {
  render() {
    return (
      <div>
        new userList
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserList)
