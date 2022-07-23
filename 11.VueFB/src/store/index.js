import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
    state: () => ({
        todos: [],
    }),
    actions: {
        addTodoItem(todo) {
            this.todos.push(todo);
        },
    },
});
