import { createApp } from 'vue'
import { router } from 'Routes/index'
import { store } from 'Store/index'
import App from './App'

createApp(App).use(router).use(store).mount('#root')
