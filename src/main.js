import axios from 'axios';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';
import './style.css';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

const app = createApp(App);
app.use(router, axios).use(store).mount('#app');
