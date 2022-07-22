import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/pages/MainPage.vue'),
        },
        {
            path: '/create',
            component: () => import('@/pages/CreatePage.vue'),
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: () => import('@/pages/EditPage.vue'),
        },
    ],
});
