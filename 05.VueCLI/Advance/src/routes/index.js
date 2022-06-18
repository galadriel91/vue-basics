import { createWebHashHistory , createRouter } from 'vue-router'
import path from './path'

export const router = new createRouter({
    history:createWebHashHistory(),
    routes:path
})