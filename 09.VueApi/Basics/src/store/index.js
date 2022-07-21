import { addNoteItem, fetchNoteItem } from '@/api';
import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
    state: () => ({
        notes: [],
    }),
    actions: {
        async onGetItem() {
            const { data } = await fetchNoteItem();
            this.notes = data;
            return data;
        },
        async onAddItem(note) {
            const { data } = await addNoteItem(note);
            this.notes.push(data);
            return data;
        },
    },
});
