import {
  createStore
} from 'redux'

const ActionTypes = {
  ADD_NUM:"ADD_NUM",
  MINUS_NUM:"MINUS_NUM",
  REPLACE_NUM:"REPLACE_NUM"
}

export const ActionCreators = {
  AddActionCreator(payload) {
    return {
      type: ActionTypes.ADD_NUM,
      payload
    }
  },
  MinusActionCreater(payload) {
    return {
      type: ActionTypes.MINUS_NUM,
      payload
    }
  },
  ReplaceActionCreater(payload) {
    return {
      type: ActionTypes.REPLACE_NUM,
      payload
    }
  }
}

//reducer
function rootReducer(prestate = 0, action) {
  switch (action.type) {
    case ActionTypes.ADD_NUM:
      return prestate + action.payload;
    case ActionTypes.MINUS_NUM:
      return prestate - action.payload;
    case ActionTypes.REPLACE_NUM:
      return action.payload;
    default:
      return prestate;
  }
}


const store = createStore(rootReducer);

export default store

