import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//引入 vue-router
import router from '@/router';
//引入pinia
import pinia from './pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(router);
app.use(pinia);

app.mount('#app')

