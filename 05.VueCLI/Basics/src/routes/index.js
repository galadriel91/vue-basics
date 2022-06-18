import Vue from 'vue'
import VueRouter from 'vue-router'
import path from './path'
Vue.use(VueRouter)

export const router = new VueRouter({
    routes:path
})