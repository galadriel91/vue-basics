import { defineStore } from 'pinia';
import type { AddItem, CheckItem } from './types';

export const useItem = defineStore('item', {
    state: () => ({
        todos: [] as AddItem[],
    }),
    actions: {
        ADD_TODO(item: AddItem) {
            this.todos.push(item);
        },
        CHECK_TODO(item: CheckItem) {
            const index = this.todos.findIndex(v => v.id === item.id);
            this.todos[index].isCheck = item.isCheck;
        },
        REMOVE_TODO(item: number) {
            const index = this.todos.findIndex(v => v.id === item);
            this.todos.splice(index, 1);
        },
    },
});
