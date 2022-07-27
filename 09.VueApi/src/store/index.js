import { defineStore } from 'pinia';
import {
    addNoteItem,
    getNoteItem,
    getEditNoteItem,
    updateNoteItem,
    removeNoteItem,
} from '@/api';

export const useStore = defineStore('store', {
    state: () => ({
        notes: [],
        edit: {},
        loading: false,
    }),
    actions: {
        onLoading() {
            this.loading = true;
        },
        offLoading() {
            this.loading = false;
        },
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
        async updateNote(note) {
            const { data } = await updateNoteItem(note.id, note);
            return data;
        },
        async removeNote(id) {
            const { data } = await removeNoteItem(id);
            return data;
        },
    },
});
