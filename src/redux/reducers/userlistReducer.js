
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
    case UserlistAction.UPDATE_USER:
      {
        let index=state.findIndex(item=>item.id===action.payload.id)
        state.splice(index,1,action.payload)
        return state;
      }
    default:
      return state
  }
}
