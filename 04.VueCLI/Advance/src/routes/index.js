import { createWebHashHistory , createRouter } from 'vue-router'

export const router = new createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            redirect:'/news'
        },
        {
            path:'/news',
            name:'news',
            component:()=> import('@/pages/ListPage')
        }
    ]
})