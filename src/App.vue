<template>
  <div id="app" class="bg-theme">
    <router-view class="flex-1 height-100 width-100"></router-view>
    <Navbar :songs ="historydata.songs"></Navbar>
  </div>
</template>

<script>
import Navbar from './components/navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      historydata:{}
    }
  },
  methods: {
    getHistory() {
      this.$fetch({
        url:'webapi/history/history'
      }).then(res => {
        this.historydata = res.data;
        this.$store.commit('updateUserData',this.historydata.user);
      }).catch(err => {
        
      })
    }
  },
  mounted() {
    this.clientHeight = document.body.clientHeight;
    this.getHistory();
  }
}
</script>

<style lang="less">
@import './assets/css/common.less';
@import url('//at.alicdn.com/t/font_1208480_kjgiyerpxfg.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  padding: 0
}
</style>
