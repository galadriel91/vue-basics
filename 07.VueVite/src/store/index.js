import { createStore } from 'vuex'
import mutations from './mutations'

export const store = createStore({
    state:{
        notes:[],
        pageIndex:1
    },
    mutations,
})