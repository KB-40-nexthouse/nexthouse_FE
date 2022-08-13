import { createApp } from 'vue'
//import App from './MyContract.vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
//import AxiosPlugin from 'vue-axios-cors'
// import store from './store'
//axios.defaults.baseURL = process.env.HOST + '/'

const app = createApp(App)
app.config.globalProperties.$axios = axios; 
//axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
//.use(AxiosPlugin)
//axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
app.use(router).mount('#app')
//app.mount('#app')