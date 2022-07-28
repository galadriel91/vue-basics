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
        searchValue: '',
        totalItem: '',
        currentPage: 1,
        limit: 3,
        loading: false,
    }),
    actions: {
        onLoading() {
            this.loading = true;
        },
        offLoading() {
            this.loading = false;
        },
        setCurrentPage(value) {
            this.currentPage = value;
        },
        setSearchValue(value) {
            this.searchValue = value;
        },
        async addNote(note) {
            const { data } = await addNoteItem(note);
            return data;
        },
        async getNote(page = 1, search) {
            const response = await getNoteItem(page, search);
            this.totalItem = response.headers['x-total-count'];
            this.notes = response.data;
            this.setCurrentPage(page);
            return response.data;
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
