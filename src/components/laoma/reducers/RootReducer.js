import {NumReducer} from './NumReducer'
import UserlistReducer from './UserlistReducer'
import {combineReducers} from 'redux'

export const rootReducer=combineReducers({
  NumReducer,
  UserList:UserlistReducer
})