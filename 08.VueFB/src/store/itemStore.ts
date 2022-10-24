import type { AddItem, CheckItem, UpdateItem, TodoItem } from './types';
import { defineStore } from 'pinia';
import { dbService } from '@/utils/fb';

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
                todos.sort((a, b) => b.created - a.created);
                this.todos = todos;
            });
        },
        async CHECK_TODO(item: CheckItem) {
            await dbService
                .doc(`todos/${item.id}`)
                .update({ isCheck: item.isCheck });
        },
        async REMOVE_TODO(item: number) {
            await dbService.doc(`todos/${item}`).delete();
        },
        async UPDATE_TODO(item: UpdateItem) {
            await dbService
                .doc(`todos/${item.id}`)
                .update({ content: item.content });
        },
    },
});
