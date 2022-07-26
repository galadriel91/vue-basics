import { defineStore } from 'pinia';
import { addNoteItem, getNoteItem } from '@/api';

export const useStore = defineStore('store', {
    state: () => ({
        notes: [],
    }),
    actions: {
        async addNote(note) {
            const { data } = await addNoteItem(note);
            return data;
        },
        async getNote() {
            const { data } = await getNoteItem();
            return data;
        },
    },
});
