import { getNote, getParamsNote } from './guard';

export default [
    {
        path: '/:pathMatch(.*)',
        redirect: '/404',
    },
    {
        path: '/404',
        component: () => import('@/pages/NotPage.vue'),
        meta: { title: 'Error' },
    },
    {
        path: '/',
        redirect: '/main',
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/pages/MainPage.vue'),
        beforeEnter: getNote(),
        meta: { title: 'Main' },
    },
    {
        path: '/create',
        name: 'create',
        component: () => import('@/pages/CreatePage.vue'),
        meta: { title: 'Create' },
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('@/pages/EditPage.vue'),
        beforeEnter: getParamsNote(),
        meta: { title: 'Edit' },
    },
    {
        path: '/item/:id',
        name: 'POST',
        component: () => import('@/pages/ItemPage.vue'),
        beforeEnter: getParamsNote(),
        meta: { title: 'Post Note' },
    },
    {
        path: '/search/:keyword',
        name: 'search',
        component: () => import('@/pages/SearchPage.vue'),
        beforeEnter: getNote(),
        meta: { title: 'Search' },
    },
];
