import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import router from './router'

import 'material-icons/iconfont/material-icons.css'

// createApp(App).mount('#app')

const app =createApp(App)
app.use(router)
app.mount('#app')