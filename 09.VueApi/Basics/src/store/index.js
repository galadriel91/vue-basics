import { addNoteItem, fetchNoteItem, removeNoteItem } from '@/api';
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
        async onRemoveItem(id) {
            const { data } = await removeNoteItem(id);
            this.onGetItem();
            return data;
        },
    },
});
