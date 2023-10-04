import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(
  VueGtag,
  {
    config: { id: 'G-SL0PEX1BVX' }
  },
  router
)

app.mount('#app')
