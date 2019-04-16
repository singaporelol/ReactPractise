
export const UserlistType={
  LOAD_USER:"LOAD_USER",
  ADD_USER:"ADD_USER",
  UPDATE_USER:"UPDATE_USER",
  DELETE_USER:"DELETE_USER"
}

export const UserlistAction={
  loadUserAction:(payload)=>{
    return ({
      type:UserlistType.LOAD_USER,
      payload
    })
  },
  addUserAction(payload){
    return ({
      type: UserlistType.ADD_USER,
      payload
    });
  },
  deleteUserAction(payload){
    return({
      type:UserlistType.DELETE_USER,
      payload
    })
  }
}