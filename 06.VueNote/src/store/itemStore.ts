import { defineStore } from 'pinia';
import type { NoteItems } from './types';
import {
    addItem,
    getEditNote,
    getNote,
    removeItem,
    updateNote,
} from '@/api/note';

export const useItem = defineStore('item', {
    state: () => ({
        notes: [] as NoteItems[],
        edit: {} as NoteItems,
        post: {} as NoteItems,
    }),
    actions: {
        async ADD_NOTE(info: NoteItems) {
            await addItem(info);
        },
        async GET_NOTE() {
            const { data } = await getNote();
            this.notes = data;
        },
        async REMOVE_NOTE(id: number) {
            await removeItem(id);
        },
        async UPDATE_NOTE(info: NoteItems) {
            await updateNote(info);
        },
        async GET_DETAIL_NOTE(id: string, name: string) {
            const { data } = await getEditNote(id);
            if (name === 'Edit') {
                this.edit = data;
            } else {
                this.post = data;
            }
        },
    },
});
