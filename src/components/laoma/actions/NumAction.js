export const ActionType={
  "ADD_NUM":"ADD_NUM",
  "MINUS_NUM":"MINUS_NUM"
}

export const ActionCreators={
  AddActtionCreator(payload){
    return {
      type:ActionType.ADD_NUM,
      payload
    }
  },
  MinusActionCreator(payload){
    return{
      type:ActionType.MINUS_NUM,
      payload
    }
  }
}
