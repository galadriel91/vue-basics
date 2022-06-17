import {getPage , getParamsPage } from './guard'

export default[
    {
        path:'/',
        redirect:'/news'
    },
    {
        path:'/news',
        name:'news',
        component:()=> import('@/pages/ListPage'),
        beforeEnter:getPage()
    },
    {
        path:'/ask',
        name:'ask',
        component:()=> import('@/pages/ListPage'),
        beforeEnter:getPage()
    },
    {
        path:'/jobs',
        name:'jobs',
        component:()=> import('@/pages/ListPage'),
        beforeEnter:getPage()
    },
    {
        path:'/user/:id',
        name:'USER',
        component:()=> import('@/pages/UserPage'),
        beforeEnter:getParamsPage()
    },
    {
        path:'/post/:id',
        name:'POST',
        component:()=> import('@/pages/PostPage'),
        beforeEnter:getParamsPage()
    }
]