import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueTypedJs from 'vue-typed-js'
import axios from 'axios'
import Appear from '@/components/transitions/Appear'
import aos from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(axios)
Vue.use(aos)
// Vue.use(VueTypedJs)
Vue.component('Appear', Appear)

aos.init({

});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
