import { createWebHashHistory , createRouter } from 'vue-router'
import { nextTick } from 'vue'
import path from './path'

export const router = createRouter({
    history:createWebHashHistory(),
    routes:path
})

router.afterEach((to) => {
    nextTick(() => {
        document.title = `${to.meta.title}`
    });
});