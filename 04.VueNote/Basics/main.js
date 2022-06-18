import Vue from 'vue'
import App from './App'
import { store } from 'Store/index'
import { router } from 'Routes/index'

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#root')