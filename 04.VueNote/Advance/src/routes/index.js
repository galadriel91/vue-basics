import { createRouter , createWebHashHistory } from 'vue-router'

export const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'main',
            component:()=>import('Pages/MainPage')
        },
        {
            path:'/create',
            name:'create',
            component:()=>import('Pages/CreatePage')
        },
        {
            path:'/edit/:id',
            name:'edit',
            component:()=>import('Pages/EditPage')
        },
        {
            path:'/item/:id',
            name:'post',
            component:()=>import('Pages/ItemPage')
        }
    ]
})