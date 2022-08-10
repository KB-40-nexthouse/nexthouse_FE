import { createRouter, createWebHistory } from 'vue-router'

import Main from '../Main.vue'

const routes = [
  {
    path: '/',
    name: 'MyMain',
    component: Main
  },
  /*
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/AboutView.vue')
  },*/
  {
    path: '/MyHwakjung',
    name: 'MyHwakjung',
    component: () => import(/* webpackChunkName: "about" */ '../Hwakjung.vue')
  },
  {
    path: '/MyHwakjungEnd',
    name: 'MyHwakjungEnd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../Hwakjung_end.vue')
  },
  {
    path: '/staging',
    name: 'staging',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../Staging.vue')
  },
  {
    path: '/MyJunyip',
    name: 'MyJunyip',
    component: () => import(/* webpackChunkName: "about" */ '../Junyip.vue')
  },
  {
    path: '/MyJunyipEnd',
    name: 'MyJunyipEnd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../Junyip_end.vue')
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router
