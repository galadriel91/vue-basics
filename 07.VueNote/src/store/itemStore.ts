import { AddNote, GetDetailNote, GetNote, UpdateNote } from '@/api/note';
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
            const { data } = await GetNote();
            this.notes = data;
        },
        async ADD_NOTE(value: NoteItems) {
            await AddNote(value);
        },
        async UPDATE_NOTE(value: NoteItems) {
            await UpdateNote(value.id, value);
        },
        async GET_DETAIL_NOTE(id: string, name: string) {
            const { data } = await GetDetailNote(id);
            if (name === 'edit') {
                this.edit = data;
            } else {
                this.post = data;
            }
        },
    },
});
