import { getPage } from './guard'

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
        component: () => import('@/pages/ListPage.vue'),
        beforeEnter:getPage()
    },
    {
        path: '/ask',
        name: 'ask',
        component: () => import('@/pages/ListPage.vue'),
        beforeEnter:getPage()
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: () => import('@/pages/ListPage.vue'),
        beforeEnter:getPage()
    },
];
