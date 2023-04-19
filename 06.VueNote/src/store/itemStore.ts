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
        showAlert: false,
        alertInfo: {
            message: '',
            class: '',
        },
    }),
    actions: {
        CHANGE_PAGE(page: number) {
            this.currentPage = page;
        },
        SET_KEYWORD(keyowrd: string) {
            this.keyword = keyowrd;
        },
        SHOW_ALERT(message: string, alertClass: string) {
            this.showAlert = true;
            this.alertInfo.message = message;
            this.alertInfo.class = alertClass;
            setTimeout(() => {
                this.showAlert = false;
            }, 2000);
        },
        SET_PAGE() {
            const isPagefull = this.limit === this.notes.length;
            const checkPage =
                (parseInt(this.totalItems) - 1) % this.limit === 0;
            if (checkPage && !isPagefull) {
                this.CHANGE_PAGE(this.currentPage - 1);
            }
        },
        async ADD_NOTE(info: NoteItems) {
            await addItem(info);
            this.SHOW_ALERT('노트가 등록 되었습니다', 'success');
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
            this.SET_PAGE();
            await removeItem(id);
            this.SHOW_ALERT('노트가 삭제 되었습니다', 'danger');
        },
        async UPDATE_NOTE(info: NoteItems) {
            await updateNote(info);
            this.SHOW_ALERT('노트가 수정 되었습니다', 'success');
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
