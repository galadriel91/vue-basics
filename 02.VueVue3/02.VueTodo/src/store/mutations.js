export default{
    ADD_TODO(state , payload){
        state.todos.push(payload)
        localStorage.setItem('todos' , JSON.stringify(state.todos))
    },
    GET_TODO(state){
        localStorage.todos ? state.todos = JSON.parse(localStorage.todos) :[]
    }
}