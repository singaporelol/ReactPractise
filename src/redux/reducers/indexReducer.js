import counterRucer from './counterRuducer'
import postReducer from './postReducer'
import {combineReducers} from 'redux'
const rootreducer= combineReducers({
  counterRucer,
  postReducer
})

export default rootreducer;