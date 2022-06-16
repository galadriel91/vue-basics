import Vue from 'vue'
import { store } from 'Store/index'
import App from './App'

new Vue({
    render:h => h(App),
    store,
}).$mount('#root')