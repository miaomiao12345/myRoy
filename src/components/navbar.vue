<template>
  <div class="navbar">
    <div class="width-100 flex-row bg-theme padding-5">
      <div :style="{background:'url('+songs.img+')','background-size':'contain'}" class="img"></div>
      <div class="flex-1 margin-left-15 text-left">{{songs.name}}-{{songs.singer}}</div>
      <i class="iconfont icon-bofang f-30 color-orange"></i>
      <i class="margin-left-10 iconfont f-30 icon-gedan color-orange"></i>
    </div>
    <div class="nav width-100">
      <div v-for="(item,index) in navlist" :key="index" @click="switchpages(item)">
        <div><i :class="[item.checked ? item.checkedicon : item.icon,'iconfont','f-30',{'color-orange':item.checked}]"></i></div>
        <div :class="[item.checked?'color-orange':'','f-15','f-w',{'f-18':item.checked}]">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navlist:[
        {
          title:"音乐馆",
          checked:true,
          icon:'icon-music',
          checkedicon: 'icon-yinle',
          'routername':'home'
        },
        {
          title:"发现",
          checked:false,
          icon:'icon-faxian',
          checkedicon: 'icon-faxian1',
          routername:'discover'
        },
        {
          title:"我",
          checked:false,
          icon:'icon-mine',
          checkedicon: 'icon-wode',
          routername: 'user'
        }
      ]
    }
  },
  props:{
    songs:{
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  methods:{
    switchpages(item) {
      this.$router.replace(item.routername);
      this.navlist.forEach(item => {
        item.checked = false
      });
      item.checked = true;
    }
  }
}
</script>

<style lang="less" scoped>
  .navbar{
    position: absolute;
    bottom: 0;
    width: 100%;
    .img{
      border-radius: 50%;
      width: 50px;
      height: 50px;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .nav{
      padding:5px;
      display:flex;
      justify-content: space-around;
      align-items: center;
      background:  rgb(131, 223, 177);
    }
  }
</style>
