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
        alertInfo: {
            message: '',
            class: '',
        },
        showAlert: false,
    }),
    actions: {
        CHANGE_PAGE(page: number) {
            this.currentPage = page;
        },
        SET_KEYWORD(keyword: string) {
            this.keyword = keyword;
        },
        SHOW_ALERT(message: string, alertClass: string) {
            this.showAlert = true;
            this.alertInfo.message = message;
            this.alertInfo.class = alertClass;
            setTimeout(() => {
                this.showAlert = false;
            }, 2000);
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
            this.SHOW_ALERT('노트가 등록 되었습니다', 'success');
        },
        async UPDATE_NOTE(value: NoteItems) {
            await UpdateNote(value.id, value);
            this.SHOW_ALERT('노트가 수정 되었습니다', 'success');
        },
        async REMOVE_NOTE(id: number) {
            await RemoveNote(id);
            this.SHOW_ALERT('노트가 삭제 되었습니다', 'danger');
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
