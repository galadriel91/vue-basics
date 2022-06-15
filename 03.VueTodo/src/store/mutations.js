export default{
    ADD_TODO(state , payload){
        state.todos.push(payload)
        localStorage.setItem('todos' , JSON.stringify(state.todos))
    },
    GET_TODO(state){
        localStorage.todos ? state.todos = JSON.parse(localStorage.todos) : []
    },
    CHECK_TODO(state , payload){
        const index = state.todos.findIndex(v=>v.id === payload)
        state.todos[index].isCheck = !state.todos[index].isCheck
        localStorage.setItem('todos' , JSON.stringify(state.todos))
    }
}