import {UserlistType} from './../actions/UserlistAction'


export default function UserlistReducer(state=[],action){
  switch(action.type){
    case UserlistType.LOAD_USER:
    {
      return action.payload;
    }
    case UserlistType.DELETE_USER:
    {
      // console.log('我是reducer里面的状态:')
      // console.log(action.payload)
      // console.log(state)
       return state.filter(item=>item.id !==action.payload)
    }
    default:
    return state
  }
}