
import {UserlistAction} from '../action'

export default (state = [], action) => {
  switch (action.type) {
    case UserlistAction.LOAD_USER:
      return action.payload
    case UserlistAction.REMOVE_USER:
      {
        return state.filter(item=>{
          return item.id!==action.payload
        })
      }
    default:
      return state
  }
}
