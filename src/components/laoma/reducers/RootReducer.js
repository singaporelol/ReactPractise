import {NumReducer} from './NumReducer'
import UserlistReducer from './UserlistReducer'
import {combineReducers} from 'redux'

export const rootReducer=combineReducers({
  Num:NumReducer,
  UserList:UserlistReducer
})