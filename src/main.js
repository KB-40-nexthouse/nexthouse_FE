import { createApp } from 'vue'
//import App from './MyContract.vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
// import store from './store'
let HOST=process.env.HOST

axios.defaults.baseURL = 'nexthouse.169.56.100.104.nip.io'
const app = createApp(App)
app.config.globalProperties.$axios = axios; 
app.use(router).mount('#app')
//app.mount('#app')