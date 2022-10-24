import { defineStore } from 'pinia';
import type { AddItem } from './types';

export const useItem = defineStore('item', {
    state: () => ({
        todos: [] as AddItem[],
    }),
    actions: {
        ADD_TODO(item: AddItem) {
            this.todos.push(item);
        },
    },
});
