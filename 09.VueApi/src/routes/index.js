import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from '@/store';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:pathMatch(.*)',
            redirect: '/404',
        },
        {
            path: '/404',
            component: () => import('@/pages/NotPage'),
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
        },
        {
            path: '/create',
            name: 'create',
            component: () => import('@/pages/CreatePage.vue'),
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: () => import('@/pages/EditPage.vue'),
        },
    ],
});
