import { createWebHashHistory , createRouter } from 'vue-router'
import { store } from '@/store/index'

const getPage = () => (to , from , next) => {
    store.dispatch('FETCH_LIST' , to.name)
    .then(()=>{
        next()
    })
}

const getParamsPage = () => (to , from , next) => {
    store.dispatch(`FETCH_${to.name}` , to.params.id)
    .then(()=>{
        next()
    })
}


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
        }
    ]
})