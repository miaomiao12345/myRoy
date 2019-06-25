import Vue from 'vue'
import Router from 'vue-router'
import MusicHouse from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MusicHouse',
      component: MusicHouse
    }
  ]
})
