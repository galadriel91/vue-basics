import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from '@/store/index';
Vue.use(VueRouter)

const getListPage = () => (to , from , next) => {
    store.commit('ON_LOADING')
    store.dispatch('FETCH_LIST' , to.name)
    .then(()=>{
        next()
    })
}

const getPageWithParams = () => (to , from , next) => {
    store.commit('ON_LOADING')
    store.dispatch(`FETCH_${to.name}` , to.params.id)
    .then(()=>{
        next()
    })
}

export const router = new VueRouter({
    routes:[
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
})