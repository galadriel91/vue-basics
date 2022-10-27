import { AddNote, GetDetailNote, GetNote } from '@/api/note';
import { defineStore } from 'pinia';
import type { NoteItems } from './types';

export const useItem = defineStore('item', {
    state: () => ({
        notes: [] as NoteItems[],
        post: {} as NoteItems,
        edit: {} as NoteItems,
    }),
    actions: {
        async GET_NOTE() {
            console.log(1);
            const { data } = await GetNote();
            this.notes = data;
        },
        async ADD_NOTE(value: NoteItems) {
            await AddNote(value);
        },
        async GET_DETAIL_NOTE(id: string) {
            const { data } = await GetDetailNote(id);
            this.post = data;
        },
        async GET_EDIT_NOTE(id: string) {
            const { data } = await GetDetailNote(id);
            this.edit = data;
        },
    },
});
