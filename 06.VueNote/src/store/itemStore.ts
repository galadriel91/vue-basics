import { defineStore } from 'pinia';
import type { NoteItems } from './types';
import { getEditNote, getNote } from '@/api/note';

export const useItem = defineStore('item', {
    state: () => ({
        notes: [] as NoteItems[],
        edit: {} as NoteItems,
    }),
    actions: {
        ADD_NOTE() {},
        async GET_NOTE() {
            const { data } = await getNote();
            this.notes = data;
        },
        REMOVE_NOTE() {},
        UPDATE_NOTE() {},
        async GET_DETAIL_NOTE(id: string) {
            const { data } = await getEditNote(id);
            this.edit = data;
        },
    },
});
