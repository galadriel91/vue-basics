import { defineStore } from 'pinia'
import actions from './actions'

export const usePinia = defineStore('pinia' , {
    state:()=>({
        num:0
    }),
    actions,
})