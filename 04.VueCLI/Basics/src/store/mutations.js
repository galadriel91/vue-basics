export default{
    FETCH_LIST_ITEM(state , payload){
        state.list = payload
    },
    ON_LOADING(state){
        state.isLoading = true
    },
    OFF_LOADING(state){
        state.isLoading = false
    }
}