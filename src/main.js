import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'
import vuetify from 'vuetify'
import mainscss from './assets/scss/_main.scss'
import tailwind from './index.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false
Vue.use(vuetify)
sync(store, router)
new Vue({
    router,
    store,
    mainscss,
    tailwind,
    render: h => h(App),
}).$mount('#app')