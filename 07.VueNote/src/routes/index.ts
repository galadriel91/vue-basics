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
            name: 'main',
            component: () => import('@/pages/MainPage.vue'),
            // beforeEnter: getPage(),
            meta: { title: 'Main Page', search: true },
        },
    ],
});
