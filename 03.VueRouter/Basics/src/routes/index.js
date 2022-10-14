import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import MainPage from 'Pages/MainPage'
import VuexPage from 'Pages/VuexPage'
import RouterPage from 'Pages/RouterPage'

export const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/webpack'
        },
        {
            path:'/webpack',
            component : MainPage
        },
        {
            path:'/vuex',
            component : VuexPage
        },
        {
            path:'/router',
            component : RouterPage
        }
    ]
})