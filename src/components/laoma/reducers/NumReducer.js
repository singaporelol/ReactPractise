import {ActionType} from '../actions/NumAction'

export const NumReducer = (state = 0, action) => {
  switch (action.type) {
    case ActionType.ADD_NUM:
      return state+action.payload
    case ActionType.MINUS_NUM:
      return state-action.payload
    default:
      return state
  }
}