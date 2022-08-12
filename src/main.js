import { createApp } from 'vue'
//import App from './MyContract.vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
// import store from './store'
let HOST=process.env.HOST || 'http://localhost:8080'

axios.defaults.baseURL = HOST
const app = createApp(App)
app.config.globalProperties.$axios = axios; 
app.use(router).mount('#app')
//app.mount('#app')