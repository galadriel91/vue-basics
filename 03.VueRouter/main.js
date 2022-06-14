import Vue from 'vue'
import App from './App'
import { router } from 'Router/index'

new Vue({
    render: h => h(App),
    router
}).$mount('#root')