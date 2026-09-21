import { createApp } from 'vue';
import './style.css'
import App from './app.vue'
import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import Tooltip from 'primevue/tooltip';
import i18n from './i18n.js';
import router from './router.js';

const primeVueUiLicenseKey = import.meta.env.VITE_PRIME_UI_LICENSE_KEY;

createApp(App)
    .use(PrimeVue, { theme: { preset: material }, ripple: true, license: priimeUiLicenseKey })
    .use(i18n)
    .use(router)
    .use(pinia)
    .mount('#app')