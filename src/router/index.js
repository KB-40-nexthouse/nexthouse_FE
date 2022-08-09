import { createRouter, createWebHashHistory } from 'vue-router'
import MyHwakjung from '../Hwakjung.vue'

const routes = [
  /*{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/AboutView.vue')
  },*/
  {
    path: '/',
    name: 'MyHwakjung',
    component: MyHwakjung
  },
  {
    path: '/MyHwakjungEnd',
    name: 'MyHwakjungEnd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../Hwakjung_end.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
