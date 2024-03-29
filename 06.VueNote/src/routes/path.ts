import { getDetail, getItem } from './guard';

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
        component: () => import('@/pages/MainPage.vue'),
        meta: { title: 'Main' },
        beforeEnter: getItem(),
    },
    {
        path: '/create',
        component: () => import('@/pages/CreatePage.vue'),
        meta: { title: 'Create' },
    },
    {
        path: '/edit/:id',
        component: () => import('@/pages/EditPage.vue'),
        meta: { title: 'Edit' },
        beforeEnter: getDetail(),
    },
    {
        path: '/note/:id',
        component: () => import('@/pages/NotePage.vue'),
        meta: { title: 'Note' },
        beforeEnter: getDetail(),
    },
    {
        path: '/search/:keyword',
        component: () => import('@/pages/SearchPage.vue'),
        meta: { title: 'Search' },
        beforeEnter: getItem(),
    },
];
