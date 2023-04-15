import { defineStore } from 'pinia'

export const piniaStore = defineStore('pinia' , {
    state:()=>({
        number:0
    }),
    actions:{
        onClickPlus(){
            this.number++
        },
        onClickMinus(){
            this.number--
        }
    }
})