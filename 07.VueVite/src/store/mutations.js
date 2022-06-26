export default{
    ADD_NOTE(state , payload){
        state.notes.unshift(payload)
        localStorage.setItem('notes' , JSON.stringify(state.notes))
    },
    GET_NOTE(state){
        localStorage.notes ? state.notes = JSON.parse(localStorage.notes) : []
    },
    GET_NOTE_ITEM(state , payload){
        const index = state.notes.findIndex(v=> v.id === parseInt(payload))
        state.editItem = state.notes[index]
    },
}