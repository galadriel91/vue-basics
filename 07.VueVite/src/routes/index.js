import { createWebHashHistory , createRouter } from 'vue-router'
import path from './path'

export const router = createRouter({
    history:createWebHashHistory(),
    routes:path
})