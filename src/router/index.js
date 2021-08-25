import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../components/forms/Contact.vue'
import Page404 from '../components/errors/Page404.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/contact', name: 'Contact', component: Contact },
  // { path: '/actualites', name: 'Actualites',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Actualites.vue')},
  // { path: '/404', name: '404', component: 404 },
  { path: '*', component: Page404 }  
    
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
