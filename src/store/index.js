import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    userdata:'' // 用户历史记录和个性定制
  },
  mutations:{
    updateUserData(state, value) {
      state.userdata = value
    }
  }
})

export default store