
import {UserlistAction} from '../action'

export default (state = [], action) => {
  switch (action.type) {
    case UserlistAction.LOAD_USER:
      return { state, ...action.payload }
    case UserlistAction.REMOVE_USER:
      return state.filter((item)=>item.Id!==action.payload)
    default:
      return state
  }
}
