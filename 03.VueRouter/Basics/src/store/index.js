import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        num:0
    },
    mutations,
})