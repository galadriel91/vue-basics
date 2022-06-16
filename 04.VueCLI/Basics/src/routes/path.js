import { getListPage , getPageWithParams } from './guard'

export default[
    {
        path:'/',
        redirect:'/news'
    },
    {
        path:'/news',
        name:'news',
        component: () => import('@/pages/ListPage'),
        beforeEnter:getListPage()
    },
    {
        path:'/ask',
        name:'ask',
        component: () => import('@/pages/ListPage'),
        beforeEnter:getListPage()
    },
    {
        path:'/jobs',
        name:'jobs',
        component: () => import('@/pages/ListPage'),
        beforeEnter:getListPage()
    },
    {
        path:'/user/:id',
        name:'USER',
        component: () => import('@/pages/UserPage'),
        beforeEnter:getPageWithParams()
    },
    {
        path:'/post/:id',
        name:'POST',
        component: () => import('@/pages/PostPage'),
        beforeEnter:getPageWithParams()
    }
]