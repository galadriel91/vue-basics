import { defineStore } from 'pinia';
import { dbService } from '@/utils/fb';
import type { AddItem, CheckItem, UpdateItem, TodoItem } from './types';
console.log(dbService);
export const useItem = defineStore('item', {
    state: () => ({
        todos: [] as TodoItem[],
    }),
    actions: {
        async ADD_TODO(item: AddItem) {
            await dbService.collection('todos').add(item);
        },
        GET_TODO() {
            dbService.collection('todos').onSnapshot(snap => {
                const todos = snap.docs.map(todo => ({
                    ...(todo.data() as AddItem),
                    id: todo.id,
                }));
                this.todos = todos;
            });
        },
        CHECK_TODO(item: CheckItem) {
            const index = this.todos.findIndex(v => v.id === item.id);
            this.todos[index].isCheck = item.isCheck;
        },
        REMOVE_TODO(item: number) {
            const index = this.todos.findIndex(v => v.id === item);
            this.todos.splice(index, 1);
        },
        UPDATE_TODO(item: UpdateItem) {
            const index = this.todos.findIndex(v => v.id === item.id);
            this.todos[index].content = item.content;
        },
    },
});
