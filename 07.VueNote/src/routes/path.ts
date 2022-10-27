import { getPage, getDetailNote } from './guard';

export default [
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
        beforeEnter: getPage(),
        meta: { title: 'Main Page', search: true },
    },
    {
        path: '/create',
        name: 'create',
        component: () => import('@/pages/CreatePage.vue'),
        meta: { title: 'Create Page', search: false },
    },
    {
        path: '/note/:id',
        name: 'note',
        component: () => import('@/pages/NotePage.vue'),
        beforeEnter: getDetailNote(),
        meta: { title: 'Note Page', search: false },
    },
    {
        path: '/edit/:id',
        name: 'edit',
        component: () => import('@/pages/EditPage.vue'),
        beforeEnter: getDetailNote(),
        meta: { title: 'Edit Page', search: false },
    },
];
