import Vue from 'vue'
import Router from 'vue-router'

const MusicHouse = r => require.ensure([], () => r(require('../views/home/home.vue')), 'home')
const Discover = r => require.ensure([], () => r(require('../views/discover/discover.vue')), 'home')
const User = r => require.ensure([], () => r(require('../views/user/user.vue')), 'user')

Vue.use(Router)

export default new Router({
  routes: [

    // 音乐馆
    {
      path: '/home',
      name: 'MusicHouse',
      component: MusicHouse,
      meta: {
        title: '音乐馆'
      }
    },

    // 发现
    {
      path: '/discover',
      name: 'Discover',
      component: Discover,
      meta: {
        title: '发现'
      }
    },

    // 我的
    {path: '/user', name:'User', component: User, meta: {title: '我的'}},

    {path: '*',redirect: '/home'}
  ]
})
