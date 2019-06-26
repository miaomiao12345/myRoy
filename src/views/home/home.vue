<template>
  <div class="content flex-column bg-theme width-100 padding-10 height-100">
    <Title></Title>
    <div class="flex-1 flex-column width-100">
      <mt-swipe :auto='4000' class="width-100 margin-top-15" style="height:150px" >
        <mt-swipe-item v-for="(item,index) in baseData.imgs" :key="index"><img :src="item" alt=""></mt-swipe-item>
      </mt-swipe>
      <div class="margin-top-15 ics width-100">
        <div v-for="(item,index) in ics" :key="index">
          <i :class="[item.icon,'iconfont','f-30']" style="color:rgb(214, 138, 67)"></i>
          <div class="f-15">{{item.text}}</div>
        </div>
      </div>
      <div class="flex-row margin-top-15 width-100">
        <div class="diantai">
          <i class="iconfont icon-bofang f-30 color-f"></i>
          <div class="f-15 color-f">个性电台</div>
        </div>
        <div class=" flex-1 margin-left-30">
          <div class="gxdt width-100 flex-row margin-top-5" v-for="item in baseData.gexingdiantai" :key="item">
            <div class="flex-1 padding-5">
              <div class="f-15 text-left">{{item.title}}</div>
              <div class="f-12 text-left">{{item.text}}</div>
            </div>
            <div style="width:40px;height:45px;">
              <img :src="item.img" alt="">
            </div>
          </div>
        </div>
      </div>
      <Card :datalist="baseData.tjgd"></Card>
    </div>
  </div>
  
</template>

<script>
import {Toast} from 'mint-ui'
import Title from '../../components/title'
import Card from './component/card'

export default {
  name: 'Home',
  data() {
    return {
      baseData: {},
      ics: [
        {icon:'icon-flyme_icon-',text:'歌手'},
        {icon:'icon-msnui-chart', text:'排行'},
        {icon:'icon-leimupinleifenleileibie',text:'分类歌单'},
        {icon:'icon-diantai',text:'电台'},
        {icon:'icon-huabankaobei-',text:'一起听'}
      ],
      tjgdStyle:{
        width:'80px',
        height:'80px'
      }
    }
  },
  components: {
    Title,
    Card
  },
  mounted() {
    this.$fetch({
      url: 'webapi/home/initData'
    }).then(res => {
      this.baseData = res.data;
    }).catch(err => {
      Toast(err.msg)
    })
  }
}
</script>

<style lang="less" scoped>
  .content{
    .ics{
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .diantai{
      width: 100px;
      height: 100px;
      background-image: url('https://y.gtimg.cn/music/photo_new/T002R800x800M000000BdR6J4dctP4.jpg?max_age=2592000');
      background-repeat: no-repeat;
      background-size: contain;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .gxdt{
      border-radius: 10px;
      background: rgba(238, 235, 235,0.5);
      padding-left: 10px;

      
    }
  }

</style>

