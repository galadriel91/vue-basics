import { createWebHashHistory , createRouter } from 'vue-router'

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
            // beforeEnter:getItemBeforePage()
        },
        {
            path:'/create',
            name:'create',
            component: () => import('@/pages/CreatePage'),
            meta:{title:'Create Note'}
        },
        {
            path:'/post/:id',
            name:'POST',
            component: () => import('@/pages/PostPage'),
            meta:{title:'Post Note'},
            // beforeEnter:getItemBeforePage()
        }
    ]
})