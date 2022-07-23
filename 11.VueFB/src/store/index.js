import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
    state: () => ({
        todos: [],
    }),
    actions: {
        addTodoItem(todo) {
            this.todos.push(todo);
        },
        checkTodoItem(id) {
            const index = this.todos.findIndex(v => v.id === id);
            this.todos[index].isCheck = !this.todos[index].isCheck;
        },
        removeTodoItem(id) {
            const index = this.todos.findIndex(v => v.id === id);
            this.todos.splice(index, 1);
        },
        updateTodoItem(todo) {
            const index = this.todos.findIndex(v => v.id === todo.id);
            this.todos[index].content = todo.content;
        },
    },
});
