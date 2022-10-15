import { createRouter, createWebHistory } from 'vue-router';
import { getPage } from './guards';
export const router = createRouter({
    history: createWebHistory(),
    routes: [
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
    ],
});
