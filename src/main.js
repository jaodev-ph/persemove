import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'
import vuetify from 'vuetify'
import mainscss from './assets/scss/_main.scss';
Vue.config.productionTip = false
Vue.use(vuetify)
sync(store, router)
new Vue({
    router,
    store,
    mainscss,
    render: h => h(App),
}).$mount('#app')