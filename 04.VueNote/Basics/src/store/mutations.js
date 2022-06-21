export default{
    ADD_NOTE(state , payload){
        state.notes.unshift(payload)
    },
    GET_NOTE_ITEM(state , payload){
        const index = state.notes.findIndex(v=> v.id === parseInt(payload))
        state.editItem = state.notes[index]
    }
}