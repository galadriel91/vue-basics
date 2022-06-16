import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/news'
        },
        {
            path:'/news',
            component: () => import('@/pages/NewsPage')
        },
        {
            path:'/ask',
            component: () => import('@/pages/AskPage')
        },
        {
            path:'/jobs',
            component: () => import('@/pages/JobsPage')
        }
    ]
})