export default{
    ADD_TODO(state , payload){
        state.todos.push(payload)
        localStorage.setItem('todos' , JSON.stringify(state.todos))
    }
}