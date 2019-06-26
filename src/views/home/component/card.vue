<template>
  <div class="width-100 margin-top-15">
    <div class="flex-row">
      <div class="f-20 f-w">{{datalist.title}}</div>
      <div class="f-10 flex-1 text-right">
        <span>更多</span>
        <i class="iconfont icon-arrowRight f-10"></i>
      </div>
    </div>
    <div class="item-box">
      <div class="margin-left-5" v-for="(item,index) in datalist.items" :key="index">
        <img :src="item.img" :style="imgStyle" alt="">
        <div>{{item.title}}</div>
        <div class="play">
          <i class="iconfont icon-bofang"></i>
          <span>{{item.numbers}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Card',
  data() {
    return {

    }
  },
  props:{
    datalist:{},
    imgStyle:{
      type:Object,
      default:function() {
        return {
          width:'80px',
          height: '80px'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .item-box{
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    // display: flex;
    // justify-content: space-around;
    // align-items: center;
  }
</style>
