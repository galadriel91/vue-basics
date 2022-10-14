import { defineStore } from "pinia";

export const usePinia = defineStore('pinia',{
    state:()=>({
        num:0
    }),
    actions:{
        ADD_NUM(){
            this.num++
        },
        MINUS_NUM(){
            this.num--
        }
    }
})