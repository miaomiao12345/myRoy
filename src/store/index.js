import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userdata: '', // 用户历史记录和个性定制
    songlist: [] , // 歌曲列表
    search: false,
    songdata: {},
    origin: 'qq音乐'
  },
  mutations: {
    updateUserData (state, value) {
      state.userdata = value
    },
    updateSongList (state, value) {
      state.songlist = value
    },
    updateSearch (state, value) {
      state.search = value
    },
    updateSongData (state, value) {
      state.songdata = value
    },
    updateOrigin (state, value) {
      state.origin = value
    }
  }
})

export default store