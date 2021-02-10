import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App.vue'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'
import mainscss from './assets/scss/_main.scss'
import tailwind from './index.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import ScrollOut from "scroll-out";
import vuetify from './plugins/vuetify';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = 'false'
sync(store, router)
new Vue({
    router,
    store,
    tailwind,
    ScrollOut,
    vuetify,
    mainscss,
    render: h => h(App)
}).$mount('#app')