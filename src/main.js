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
import IconBase from '@/components/IconBase'
import IconHtml from '@/components/assets/IconHtml'
import IconCss from '@/components/assets/IconCss'
import IconPhp from '@/components/assets/IconPhp'

Vue.config.productionTip = false
Vue.component('iconBase', IconBase);
Vue.component('IconHtml', IconHtml);
Vue.component('IconCss', IconCss);
Vue.component('IconPhp', IconPhp);
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
