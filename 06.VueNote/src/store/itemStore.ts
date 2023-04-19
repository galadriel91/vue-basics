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
        totalItems: '',
        currentPage: 1,
        limit: 3,
        keyword: '',
    }),
    actions: {
        async ADD_NOTE(info: NoteItems) {
            await addItem(info);
        },
        async GET_NOTE() {
            const params = {
                q: this.keyword,
                _sort: 'id',
                _order: 'desc',
                _limit: this.limit,
                _page: this.currentPage,
            };
            const response = await getNote(params);
            this.notes = response.data;
            this.totalItems = response.headers['x-total-count'];
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
        CHANGE_PAGE(page: number) {
            this.currentPage = page;
        },
        SET_KEYWORD(keyowrd: string) {
            this.keyword = keyowrd;
        },
    },
});
