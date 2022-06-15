import { saveItem } from './common'

export default{
    ADD_TODO(state , payload){
        state.todos.push(payload)
        saveItem(state.todos)
    },
    GET_TODO(state){
        localStorage.todos ? state.todos = JSON.parse(localStorage.todos) : []
    },
    CHECK_TODO(state , payload){
        const index = state.todos.findIndex(v=>v.id === payload)
        state.todos[index].isCheck = !state.todos[index].isCheck
        saveItem(state.todos)
    },
    REMOVE_TODO(state , payload){
        const index = state.todos.findIndex(v=>v.id === payload)
        state.todos.splice(index , 1)
        saveItem(state.todos)
    },
    UPDATE_TODO(state , payload){
        const index = state.todos.findIndex(v=>v.id === payload.id)
        state.todos[index].content = payload.content
        saveItem(state.todos)
    }
}