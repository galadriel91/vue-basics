import { getNote } from '@/api/note';
import { defineStore } from 'pinia';
import type { NoteItems } from './types';

export const useItem = defineStore('item', {
    state: () => ({
        notes: [] as NoteItems[],
    }),
    actions: {
        async GET_NOTE() {
            const { data } = await getNote();
            this.notes = data;
        },
        ADD_NOTES(value: NoteItems) {
            this.notes.push(value);
        },
    },
});
