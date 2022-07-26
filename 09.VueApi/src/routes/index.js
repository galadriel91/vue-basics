import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
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
            name: 'eidt',
            component: () => import('@/pages/EditPage.vue'),
        },
    ],
});
