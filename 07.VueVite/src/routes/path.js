import { getItemBeforePage } from './guard'

export default[
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