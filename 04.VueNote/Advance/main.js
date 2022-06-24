import { createApp } from 'vue'
import { store } from 'Store/index'
import { router } from 'Routes/index'
import App from './App'

createApp(App).use(store).use(router).mount('#root')