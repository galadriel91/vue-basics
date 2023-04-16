import { defineStore } from 'pinia'
import type { ListItems , PostsItem, UserItems } from './types'
import { fetchListItem, fetchUserItem, fetchPostItem} from '@/api'

export const itemStore = defineStore('item' , {
    state:() => ({
        lists: [] as ListItems[],
        user: {} as UserItems,
        post: {} as PostsItem
    }),
    actions:{
        async FETCH_LIST(name: string) {
            const { data } = await fetchListItem(name);
            this.lists = data;
        },
        async FETCH_USER(userName: string) {
            const { data } = await fetchUserItem(userName)
            this.user = data;
        },
        async FETCH_POST(postName: string) {
            const { data } = await fetchPostItem(postName)
            this.post = data;
        },
    }
})