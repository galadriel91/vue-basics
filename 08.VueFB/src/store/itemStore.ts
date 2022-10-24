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
            dbService.doc(`todos/${item.id}`).update({ isCheck: item.isCheck });
        },
        REMOVE_TODO(item: number) {
            dbService.doc(`todos/${item}`).delete();
        },
        UPDATE_TODO(item: UpdateItem) {
            dbService.doc(`todos/${item.id}`).update({ content: item.content });
        },
    },
});
