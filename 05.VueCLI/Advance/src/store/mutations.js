export default{
    FETCH_LIST_ITEM(state , payload){
        state.list = payload
    },
    FETCH_USER_ITEM(state , payload){
        state.user = payload
    },
    FETCH_POST_ITEM(state , payload){
        state.post = payload
    },
    ON_LOADING(state){
        state.isLoading = true
    },
    OFF_LOADING(state){
        state.isLoading = false
    }
}