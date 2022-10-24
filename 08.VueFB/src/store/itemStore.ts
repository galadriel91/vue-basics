import { defineStore } from 'pinia';
import { dbService } from '@/utils/fb';
import type { AddItem, CheckItem, UpdateItem } from './types';

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
        UPDATE_TODO(item: UpdateItem) {
            const index = this.todos.findIndex(v => v.id === item.id);
            this.todos[index].content = item.content;
        },
    },
});
