import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            { path: '', component: () => import('pages/IndexPage.vue') },
            { path: 'typo', component: () => import('pages/TypoPage.vue') },
            { path: 'color', component: () => import('pages/ColorPage.vue') },
            { path: 'space', component: () => import('pages/SpacingPage.vue') },
            { path: 'break', component: () => import('pages/BreakPage.vue') },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
];

export default routes;
