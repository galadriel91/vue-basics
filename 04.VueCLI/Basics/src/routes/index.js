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
            name:'news',
            component: () => import('@/pages/ListPage')
        },
        {
            path:'/ask',
            name:'ask',
            component: () => import('@/pages/ListPage')
        },
        {
            path:'/jobs',
            name:'jobs',
            component: () => import('@/pages/ListPage')
        },
        {
            path:'/user/:id',
            component: () => import('@/pages/UserPage')
        },
        {
            path:'/post/:id',
            component: () => import('@/pages/PostPage')
        }
    ]
})