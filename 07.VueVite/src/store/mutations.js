export default{
    ADD_NOTE(state , payload){
        state.notes.unshift(payload)
        localStorage.setItem('notes' , JSON.stringify(state.notes))
    },
    GET_NOTE(state){
        localStorage.notes ? state.notes = JSON.parse(localStorage.notes) : []
    },
}