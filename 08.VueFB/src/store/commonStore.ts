import { defineStore } from 'pinia';

export const commonStore = defineStore('common', {
    state: () => ({
        loading: true,
    }),
    actions: {},
});
