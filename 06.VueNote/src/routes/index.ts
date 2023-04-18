import { createWebHistory, createRouter } from 'vue-router';

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
        },
        {
            path: '/create',
            component: () => import('@/pages/CreatePage.vue'),
            meta: { title: 'Create' },
        },
    ],
});
