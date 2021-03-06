import db from './../db.js'
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
  REMOVE_USER:"REMOVE_USER",
  UPDATE_USER:"UPDATE_USER"
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
  },
  UpdateUser(payload){
    return{
      type:UserlistAction.UPDATE_USER,
      payload
    }
  },
  AsyLoadUser:(payload)=>{
    return (dispatch,getState)=>{
      //return axios.delete()
      payload=db.userlist
      dispatch(UserlistActionCreator.LoadUser(payload))
    }
    
  },
  AsyRemoveUser:(payload)=>{
    return (dispatch,getState)=>{
      dispatch(UserlistActionCreator.RemoveUser(payload))
    }
  }
  
}
