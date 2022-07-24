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
        async checkTodoItem({ id, isCheck }) {
            await dbService.doc(`/todos/${id}`).update({ isCheck });
        },
        async removeTodoItem(id) {
            await dbService.doc(`/todos/${id}`).delete();
        },
        async updateTodoItem({ id, content }) {
            await dbService.doc(`/todos/${id}`).update({ content });
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
