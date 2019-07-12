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
export const UserlistAction={
  LOAD_USER:"LOAD_USER",
  REMOVE_USER:"REMOVE_USER"
}
export const UserlistActionCreator={
  
  LoadUser:(payload)=>{
    return{
      type:UserlistAction.LOAD_USER,
      payload
    }
  },
  RemoveUser(payload){
    return{
      type:UserlistAction.REMOVE_USER,
      payload
    }
  }
  
}
