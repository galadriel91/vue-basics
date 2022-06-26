import { createWebHashHistory , createRouter } from 'vue-router'
import { store } from '@/store/index'

export const getItemBeforePage = () => (to , from , next) => {
    store.commit('GET_NOTE_ITEM' , to.params.id)
    next()
}

export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'main',
            component: () => import('@/pages/MainPage'),
            meta:{title:'Vue Vite'}
        },
        {
            path:'/edit/:id',
            name:'edit',
            component: () => import('@/pages/EditPage'),
            meta:{title:'Edit Note'},
            beforeEnter:getItemBeforePage()
        },
        {
            path:'/create',
            name:'create',
            component: () => import('@/pages/CreatePage'),
            meta:{title:'Create Note'}
        },
        {
            path:'/item/:id',
            name:'POST',
            component: () => import('@/pages/ItemPage'),
            meta:{title:'Post Note'},
            beforeEnter:getItemBeforePage()
        }
    ]
})