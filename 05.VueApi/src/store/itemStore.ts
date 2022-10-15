import type { ListItems, UserItems, PostsItem } from './types';
import { fetchListItem, fetchPostItem, fetchUserItem } from '@/api/index';
import { defineStore } from 'pinia';

export const useItem = defineStore('item', {
    state: () => ({
        lists: [] as ListItems[],
        user: {} as UserItems,
        post: {} as PostsItem,
    }),
    actions: {
        async FETCH_LIST(name: string) {
            const { data } = await fetchListItem(name);
            this.lists = data;
        },
        async FETCH_USER(user: string) {
            const { data } = await fetchUserItem(user);
            this.user = data;
        },
        async FETCH_POST(postId: string) {
            const { data } = await fetchPostItem(postId);
            this.post = data;
        },
    },
});
