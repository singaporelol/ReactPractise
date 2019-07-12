export const NumAction = (num)=>{
  return{
    type: 'NUM_ADD',
    payload: num
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