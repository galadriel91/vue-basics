import { defineStore } from 'pinia';
import { addNoteItem, getNoteItem, getEditNoteItem } from '@/api';

export const useStore = defineStore('store', {
    state: () => ({
        notes: [],
        edit: {},
    }),
    actions: {
        async addNote(note) {
            const { data } = await addNoteItem(note);
            return data;
        },
        async getNote() {
            const { data } = await getNoteItem();
            this.notes = data;
            return data;
        },
        async getEditNote(id) {
            const { data } = await getEditNoteItem(id);
            this.edit = data;
            return data;
        },
    },
});
