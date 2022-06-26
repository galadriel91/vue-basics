import { createStore } from 'vuex'
import mutations from './mutations'

export const store = createStore({
    state:{
        notes:[],
        currentPage:1,
        pageIndex:0,
        editItem:{}
    },
    mutations,
})