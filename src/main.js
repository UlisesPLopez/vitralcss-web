import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// fuentes
import './assets/styles/fonts.css';

// vitralcss
import 'vitralcss/vitralcss.min.css'
import 'vitralcss/vitralcss.min.js'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createApp(App).use(router).mount('#app')
//s