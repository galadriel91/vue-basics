export default{
    FETCH_LIST_ITEM(state , payload){
        state.list = payload
    },
    FETCH_USER_ITEM(state , payload){
        state.user = payload
    }
}