import { defineStore } from 'pinia';
import { dbService } from '@/utils/fs';

export const useStore = defineStore('store', {
    state: () => ({
        todos: [],
        loading: false,
    }),
    actions: {
        onLoading() {
            this.loading = true;
        },
        offLoading() {
            this.loading = false;
        },
        async addTodoItem(todo) {
            this.onLoading();
            await dbService.collection('todos').add(todo);
        },
        async checkTodoItem({ id, isCheck }) {
            await dbService.doc(`/todos/${id}`).update({ isCheck });
        },
        async removeTodoItem(id) {
            this.onLoading();
            await dbService.doc(`/todos/${id}`).delete();
        },
        async updateTodoItem({ id, content }) {
            await dbService.doc(`/todos/${id}`).update({ content });
        },
        async getTodoItem() {
            this.onLoading();
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
