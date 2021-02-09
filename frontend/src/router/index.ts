import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

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

export default router
