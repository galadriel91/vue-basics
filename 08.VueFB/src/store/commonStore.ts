import { defineStore } from 'pinia';

export const useCommon = defineStore('common', {
    state: () => ({
        loading: false,
    }),
    actions: {},
});
