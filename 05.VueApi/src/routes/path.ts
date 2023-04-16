import { getPage } from './guard'

export default [
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
