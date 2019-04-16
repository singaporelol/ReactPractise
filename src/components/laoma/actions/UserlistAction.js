import axios from 'axios'
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
  AsyncLoadUserAction:($this) => {
    return (dispatch, getState)=>
      axios.get("http://localhost:3009/userlist").then(res => {
        dispatch(UserlistAction.loadUserAction(res.data));
        $this.setState({
          userlist: getState().UserList
        });
      });
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