export const Action={
  NUM_ADD:"NUM_ADD",
  NUM_MINUS:"NUM_MINUS"
}

export const ActonCreator={
  AddNumber:(payload)=>{
    return{
      type:Action.NUM_ADD,
      payload:payload
    }
  },
  MinusNumber:(payload)=>{
    return{
      type:Action.NUM_MINUS,
      payload:payload
    }
  }
}



