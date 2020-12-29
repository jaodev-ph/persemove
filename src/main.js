import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import {sync} from 'vue-router-sync'
Vue.config.productionTip = false

sync(store, router)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
