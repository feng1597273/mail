import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
