import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import VueClock from '@dangvanthanh/vue-clock';

createApp(App).use(router).use(VueClock).mount('#app')
