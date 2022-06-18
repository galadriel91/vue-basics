import Vue from 'vue'
import VueRotuer from 'vue-router'

Vue.use(VueRotuer)

export const router = new VueRotuer({
    routes:[
        {
            path:'/',
            component:()=>import('Pages/MainPage')
        },
        {
            path:'/edit',
            component:()=>import('Pages/EditPage')
        },
        {
            path:'/create',
            component:()=>import('Pages/CreatePage')
        }
    ]
})