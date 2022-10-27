import {
    AddNote,
    GetDetailNote,
    GetNote,
    RemoveNote,
    UpdateNote,
} from '@/api/note';
import { defineStore } from 'pinia';
import type { NoteItems } from './types';

export const useItem = defineStore('item', {
    state: () => ({
        notes: [] as NoteItems[],
        post: {} as NoteItems,
        edit: {} as NoteItems,
        totalItems: '',
        limit: 3,
        currentPage: 1,
        keyword: '',
    }),
    actions: {
        CHANGE_PAGE(page: number) {
            this.currentPage = page;
        },
        SET_KEYWORD(keyword: string) {
            this.keyword = keyword;
        },
        async GET_NOTE() {
            const params = {
                q: this.keyword,
                _sort: 'id',
                _order: 'desc',
                _limit: this.limit,
                _page: this.currentPage,
            };
            const response = await GetNote(params);
            this.notes = response.data;
            this.totalItems = response.headers['x-total-count'] as string;
        },
        async ADD_NOTE(value: NoteItems) {
            await AddNote(value);
        },
        async UPDATE_NOTE(value: NoteItems) {
            await UpdateNote(value.id, value);
        },
        async REMOVE_NOTE(id: number) {
            await RemoveNote(id);
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
