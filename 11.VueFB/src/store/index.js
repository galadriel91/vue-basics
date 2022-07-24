import { defineStore } from 'pinia';
import { dbService } from '@/utils/fs';

export const useStore = defineStore('store', {
    state: () => ({
        todos: [],
    }),
    actions: {
        async addTodoItem(todo) {
            await dbService.collection('todos').add(todo);
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
        getTodoItem() {
            dbService.collection('todos').onSnapshot(snap => {
                const todos = snap.docs.map(todo => ({
                    ...todo.data(),
                    id: todo.id,
                }));
                this.todos = todos;
            });
        },
    },
});
