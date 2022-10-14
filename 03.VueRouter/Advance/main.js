import { createApp } from 'vue'
import { router } from 'Routes/index'
import { createPinia } from 'pinia'
const pinia = createPinia()
import App from './App'

createApp(App).use(router).use(pinia).mount('#root')
