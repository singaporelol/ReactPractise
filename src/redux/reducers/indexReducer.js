import counterRucer from './counterRuducer'
import postReducer from './postReducer'
import userlistReducer from './userlistReducer'
import {combineReducers} from 'redux'
const rootreducer= combineReducers({
  counterRucer,
  postReducer,
  userlistReducer
})

export default rootreducer;