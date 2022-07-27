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
            beforeEnter: (to, from, next) => {
                const store = useStore();
                const { getNote } = store;
                getNote()
                    .then(() => {
                        next();
                    })
                    .catch(() => {
                        next('/404');
                    });
            },
            meta: { title: 'Main' },
        },
        {
            path: '/create',
            name: 'create',
            component: () => import('@/pages/CreatePage.vue'),
            meta: { title: 'Create' },
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: () => import('@/pages/EditPage.vue'),
            meta: { title: 'Edit' },
        },
    ],
});
