import {UserlistType} from './../actions/UserlistAction'


export default function UserlistReducer(state=[],action){
  switch(action.type){
    case UserlistType.LOAD_USER:
    {
      return action.payload;
    }
    default:
    return state
  }
}