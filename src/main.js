import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import {router} from './router/index.js'


const app = createApp(App)
// app.component('AppLoader', AppLoader)
app.use(router)
app.mount('#app')
