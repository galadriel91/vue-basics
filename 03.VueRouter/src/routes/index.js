import { createWebHistory , createRouter } from 'vue-router'

export const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:import('@/pages/MainPage.vue')
        }
    ]
})