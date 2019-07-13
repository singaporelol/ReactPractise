import counterReducer from './counterRuducer'
import postReducer from './postReducer'
import userlistReducer from './userlistReducer'
import {combineReducers} from 'redux'
const rootreducer= combineReducers({
  counterReducer,
  postReducer,
  userlistReducer
})

export default rootreducer;