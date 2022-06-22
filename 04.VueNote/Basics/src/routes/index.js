import Vue from 'vue'
import VueRotuer from 'vue-router'
import path from './path'

Vue.use(VueRotuer)

export const router = new VueRotuer({
    routes:path
})

router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = `${to.meta.title}`
    });
});



