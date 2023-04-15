import { createStore } from 'vuex'

export const store = createStore({
    state:{
        number:0
    },
    mutations:{
        ADD_NUM(state){
            state.number++
        },
        MINUS_NUM(state){
            state.number--
        }
    }
})