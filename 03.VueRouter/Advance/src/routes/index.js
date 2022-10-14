import { createRouter , createWebHashHistory } from 'vue-router'
import MainPage from 'Pages/MainPage'
import VuexPage from 'Pages/VuexPage'
import RouterPage from 'Pages/RouterPage'

export const router = createRouter({
    history:createWebHashHistory(),
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