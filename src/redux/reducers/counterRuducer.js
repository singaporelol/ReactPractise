//创建reducer:
const counterRucer=function(state=0,action){
  switch(action.type){
    case "NUM_ADD":
    return state+action.payload
    default:
    return state;
  }
}
export default counterRucer;