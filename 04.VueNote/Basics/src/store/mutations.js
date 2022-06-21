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
    UPDATE_NOTE(state , payload){
        const index = state.notes.findIndex(v=> v.id === parseInt(payload.id))
        state.notes[index] = payload
        localStorage.setItem('notes' , JSON.stringify(state.notes))
    },
    REMOVE_NOTE(state , payload){
        const index = state.notes.findIndex(v=> v.id === parseInt(payload.id))
        state.notes.splice(index , 1)
        localStorage.setItem('notes' , JSON.stringify(state.notes))
    }
}