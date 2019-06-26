import React, { Component } from 'react'

export default class reactdemo extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  render() {
    let arr=[1,2,"xueqian"];
    return (
      <div>
        <ul>
          {arr.map((item,index)=>{
            return (<li>数值是{item},key的是值是{index}</li>)
          })}
        </ul><hr></hr>
      </div>
    )
  }
}
