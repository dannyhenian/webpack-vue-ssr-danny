import Vue from 'vue'
import Router from 'vue-router'
const A = () => import('../components/A/A.vue')
const B = () => import('../components/B/B.vue')

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    routes: [
      {
        path: '/',
        redirect: '/a'
      },
      {
        path: '/a',
        name: 'A',
        component: A
      },
      {
        path: '/b',
        name: 'B',
        component: B
      }
    ]
  })
}
