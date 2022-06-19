import Vue from 'vue'
import VueRotuer from 'vue-router'

Vue.use(VueRotuer)

export const router = new VueRotuer({
    routes:[
        {
            path:'/',
            name:'main',
            component:()=>import('Pages/MainPage')
        },
        {
            path:'/edit',
            name:'edit',
            component:()=>import('Pages/EditPage')
        },
        {
            path:'/create',
            name:'create',
            component:()=>import('Pages/CreatePage')
        }
    ]
})