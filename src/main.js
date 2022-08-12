import { createApp } from 'vue'
//import App from './MyContract.vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
// import store from './store'

axios.defaults.baseURL = 'http://nexthouse.169.56.100.104.nip.io/'
const app = createApp(App)
app.config.globalProperties.$axios = axios; 
app.use(router).mount('#app')
//app.mount('#app')