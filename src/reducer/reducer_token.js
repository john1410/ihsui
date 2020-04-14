export default (state=null,action)=>{
    if (action.type === 'SET_TOKEN') {
        return action.payload;
    } else {
        return state;
    }
}