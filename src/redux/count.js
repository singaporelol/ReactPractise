import React from 'react' 
import { createStore } from 'redux';

export const reducerName = (state = {x:1}, action) => {
  switch (action.type) {
    case 'ADD':
      return state={...state,}
    default:
      return state
  }
}
const store = createStore(reducerName)

export default class Count extends React.Component {
  render(){
    return(<div>asdf</div>)
  }
}