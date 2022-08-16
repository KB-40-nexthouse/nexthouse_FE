import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


const app = createApp(App)
app.config.globalProperties.$axios = axios; 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
app.use(BootstrapVue3).use(router).mount('#app')
//app.mount('#app')