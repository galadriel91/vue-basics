import { getPage, getParamsPage } from './guards';

export default [
    {
        path: '/:pathMatch(.*)',
        redirect: '/404',
    },
    {
        path: '/404',
        component: () => import('@/pages/NotPage.vue'),
    },
    {
        path: '/',
        redirect: '/news',
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('@/pages/ListsPage.vue'),
        beforeEnter: getPage(),
    },
    {
        path: '/ask',
        name: 'ask',
        component: () => import('@/pages/ListsPage.vue'),
        beforeEnter: getPage(),
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: () => import('@/pages/ListsPage.vue'),
        beforeEnter: getPage(),
    },
    {
        path: '/user/:id',
        name: 'user',
        component: () => import('@/pages/UserPage.vue'),
        beforeEnter: getParamsPage(),
    },
    {
        path: '/post/:id',
        name: 'post',
        component: () => import('@/pages/PostPage.vue'),
        beforeEnter: getParamsPage(),
    },
];
