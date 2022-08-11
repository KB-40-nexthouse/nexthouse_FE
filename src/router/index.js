import { createWebHistory,createRouter } from 'vue-router'

// import Main from '../Main.vue'

const routes = [
  {
    path: '',
    redirect: {name : "Main"},
  },
  {
    path: '/Main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ '../Main.vue')
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
    component: () => import(/* webpackChunkName: "about" */ '../Hwakjung_end.vue')
  },
  {
    path: '/staging',
    name: 'staging',
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
    component: () => import(/* webpackChunkName: "about" */ '../Junyip_end.vue')
  },
  {
    path: '/MyCounsel',
    name: 'MyCounsel',
    component: () => import(/* webpackChunkName: "about" */ '../MyCounsel.vue')
  },
  {
    path: '/MyBojeong',
    name: 'MyBojeong',
    component: () => import(/* webpackChunkName: "about" */ '../Bojeong.vue')
  },
  {
    path: '/MyBojeongEnd',
    name: 'MyBojeongEnd',
    component: () => import(/* webpackChunkName: "about" */ '../Bojeong_end.vue')
  },
  {
    path: '/ChatPage',
    name: 'ChatPage',
    component: () => import(/* webpackChunkName: "about" */ '../ChatPage.vue')
  },
  {
    path: '/summary',
    name: 'summaryLayout',
    component: () => import(/* webpackChunkName: "about" */ '../SummaryLayout.vue')
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes
})

export default router
