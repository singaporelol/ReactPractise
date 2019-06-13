import React, { Component } from 'react'
import Contextchild from './contextchild'
export const {Provider, Consumer}=React.createContext();

export default class Context extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user:{
        name:'zhangsan',
        age:18
      }    
    }
  }
  render() {
    return (
      <div>
        {/* 这个是根组件 */}
        <Provider value={this.state.user}>
          <Contextchild/>

        </Provider>
      </div>
    )
  }
}
