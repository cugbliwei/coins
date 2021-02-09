import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from '@/store/index'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: 'login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '@/views/Login/index.vue')
  },
  {
    path: '/bitsData',
    component: () => import('@/layout/index.vue'),
    children: [ 
      {
        path: '',
        redirect: "records"
      },
      {
        path: '/records',
        name: 'records',
        component: () => import( '@/views/Records/index.vue')
      },
    ]
  },
  
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.getters.GTE_NICKNAME && to.name != 'login') {
    next({name: 'login'})
  } else {
    next()
  }
})

export default router
