import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/AboutView',
    name: 'AboutView',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/SosialMedia',
    name: 'SosialMedia',
    component: () => import(/* webpackChunkName: "about" */ '../views/SosialMedia.vue')
  },
  {
    path: '/HomeCard',
    name: 'HomeCard',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeCard.vue')
  },
  {
    path: '/detailkarakter/:id',
    name: 'detailkarakter',
    component: () => import(/* webpackChunkName: "about" */ '../views/CharDetailView.vue')
  },
  {
    path: '/detailliyue/:id',
    name: 'detailliyue',
    component: () => import(/* webpackChunkName: "about" */ '../views/CharDetailView.vue')
  },
  {
    path: '/detailinazuma/:id',
    name: 'detailinazuma',
    component: () => import(/* webpackChunkName: "about" */ '../views/CharDetailView.vue')
  },
  {
    path: '/detailsemeru/:id',
    name: 'detailsemeru',
    component: () => import(/* webpackChunkName: "about" */ '../views/CharDetailView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
