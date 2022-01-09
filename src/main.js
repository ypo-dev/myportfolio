import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';


createApp(App).use(VueToast).mount('#app')
