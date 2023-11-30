import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'normalize.css'
import 'element-plus/dist/index.css'
import App from './App.vue'

// 注册路由
import router from './router'

// 注册svg-icon
import SvgIcon from './components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.component('svg-icon', SvgIcon)

app.use(router)
app.use(pinia)

app.mount('#app')
