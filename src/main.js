// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { fetch } from './service/fetch'

require('./service/polyfill')

Vue.config.productionTip = false

// 绑定fetch到vue原型上，方便调用
Vue.prototype.$fetch = fetch

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
