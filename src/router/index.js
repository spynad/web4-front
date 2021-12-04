import { createRouter, createWebHashHistory } from 'vue-router'
import Auth from '../views/Auth.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Auth,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("jwtToken") !== null) next({name: "app"})
      else next("auth");
    }
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
