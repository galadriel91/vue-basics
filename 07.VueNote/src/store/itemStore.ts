import { defineStore } from 'pinia';
import type { NoteItems } from './types';

export const useItem = defineStore('item', {
    state: () => ({
        notes: [] as NoteItems[],
    }),
    actions: {
        ADD_NOTES(value: NoteItems) {
            this.notes.push(value);
        },
    },
});
