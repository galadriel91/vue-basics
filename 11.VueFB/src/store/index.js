import { defineStore } from 'pinia';
import { dbService } from '@/utils/fs';

export const useStore = defineStore('store', {
    state: () => ({
        todos: [],
    }),
    actions: {
        async addTodoItem(todo) {
            await dbService.collection('todos').add(todo);
        },
        checkTodoItem(id) {
            const index = this.todos.findIndex(v => v.id === id);
            this.todos[index].isCheck = !this.todos[index].isCheck;
        },
        async removeTodoItem(id) {
            await dbService.doc(`/todos/${id}`).delete();
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
