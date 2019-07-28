import Vue from 'vue'
import Router from 'vue-router'

const MusicHouse = r => require.ensure([], () => r(require('../views/home/home.vue')), 'home')
const Discover = r => require.ensure([], () => r(require('../views/discover/discover.vue')), 'home')
const User = r => require.ensure([], () => r(require('../views/user/user.vue')), 'user')
const Songs = r => require.ensure([], () => r(require('../views/songs/songs.vue')), 'songs')

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


    // 歌曲列表
    {path: '/songs', name: 'Songs', component: Songs, meta: {title: '歌曲列表'}},

    {path: '*', redirect: '/home'}
  ]
})
