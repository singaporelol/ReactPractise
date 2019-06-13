import React, { Component } from 'react'
import {Consumer} from './context'

export default class Contextchild extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {
            context=>{
              return(
              <div>
                <div>{context.name}</div>
                <div>{context.age}</div>
                <GrandChild/>
              </div>
              )
            }
          }
        </Consumer>
      </div>
    )
  }
}

function GrandChild(){
  return (
    <Consumer>
      {
        context=>{
          return (<div>{context.name}</div>)
        }
      }
    </Consumer>
  )
}
