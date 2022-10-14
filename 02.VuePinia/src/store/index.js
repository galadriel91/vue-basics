import { defineStore } from 'pinia'

export const usePinia = defineStore('pinia',{
    state:()=>({
        number:0
    }),
    actions:{
        ADD_NUM(){
            this.number++
        },
        MINUS_NUM(){
            this.number--
        }
    }
})