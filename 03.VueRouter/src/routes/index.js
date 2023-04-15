import { createWebHistory , createRouter } from 'vue-router'

export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:import('@/pages/MainPage.vue')
        },
        {
            path:'/pinia',
            component:import('@/pages/PiniaPage.vue')
        },
        {
            path:'/router',
            component:import('@/pages/RouterPage.vue')
        }
    ]
})