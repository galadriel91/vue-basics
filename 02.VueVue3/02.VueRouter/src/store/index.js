import { createStore } from "vuex";
import mutations from "./mutations";
export const store = createStore({
    state:{
        num:0
    },
    mutations,
})