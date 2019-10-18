import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
