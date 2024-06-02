// import ViewUIPlus from 'view-ui-plus'
import { createApp } from 'vue'
import App from './App.vue'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import router from './router/router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './assets/main.css'
import '../theme/font-awesome.css'
import '../theme/font-awesome/all.min.css'
import VueDOMPurifyHTML from 'vue-dompurify-html'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(pinia)
app.use(VueDOMPurifyHTML)
app.use(router).mount('#app')
