export default[
    {
        path:'/',
        name:'main',
        component:()=>import('Pages/MainPage'),
        meta:{title:'Vue Note'}
    },
    {
        path:'/edit/:id',
        name:'edit',
        component:()=>import('Pages/EditPage'),
        meta:{title:'Edit Note'}
    },
    {
        path:'/create',
        name:'create',
        component:()=>import('Pages/CreatePage'),
        meta:{title:'Create Note'}
    },
    {
        path:'/item/:id',
        name:'item',
        component:()=>import('Pages/ItemPage'),
        meta:{title:'Post Note'}
    }
]