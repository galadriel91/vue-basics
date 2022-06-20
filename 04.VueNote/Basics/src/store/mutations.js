export default{
    ADD_NOTE(state , payload){
        state.notes.unshift(payload)
    }
}