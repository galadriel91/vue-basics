import { defineStore } from 'pinia';
import type { NoteItems } from './types';
import { getNote } from '@/api/note';

export const useItem = defineStore('item', {
    state: () => ({
        notes: [] as NoteItems[],
    }),
    actions: {
        ADD_NOTE() {},
        async GET_NOTE() {
            const { data } = await getNote();
            this.notes = data;
        },
        REMOVE_NOTE() {},
    },
});
