import { defineStore } from 'pinia'
import type {ListItems } from './types'
import { fetchListItem } from '@/api'

export const itemStore = defineStore('item' , {
    state:() => ({
        lists: [] as ListItems[]
    }),
    actions:{
        async FETCH_LIST(name: string) {
            const { data } = await fetchListItem(name);
            this.lists = data;
        },
    }
})