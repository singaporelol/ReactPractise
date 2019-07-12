//创建reducer:
import {Action} from '../action'
const counterReducer=function(state=0,action){
  switch(action.type){
    case Action.NUM_ADD:
    return state+action.payload
    case Action.NUM_MINUS:
      return state-action.payload
    default:
    return state;
  }
}
export default counterReducer;