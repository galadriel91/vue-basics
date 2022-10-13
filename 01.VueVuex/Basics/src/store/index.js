import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
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