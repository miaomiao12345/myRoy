<template>
  <div class="width-100 margin-top-15">
    <div class="flex-row">
      <div class="f-20 f-w">{{title}}</div>
      <div class="f-10 flex-1 text-right">
        <span>更多</span>
        <i class="iconfont icon-arrowRight f-10"></i>
      </div>
    </div>
    <div class="item-box">
      <div class="item margin-left-15 margin-top-5" :style="imgStyle" v-for="(item,index) in datalist.items" :key="index" @click="getSongList(item)">
        <div style="position:relative">
          <img :src="item.img"  alt="">
          <div class="play">
            <i class="iconfont icon-play1 f-10"></i>
            <span>{{item.numbers}}</span>
          </div>
        </div>
        <div class="f-12 ttt" >{{item.title}}</div>
        
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
    title: '',
    datalist:{
      type: Object,
      default: function() {
        return {}
      }
    },
    imgStyle:{
      type:Object,
      default:function() {
        return {
          width:'90px',
          height: '90px',
        }
      }
    },
    handleClick:{
      type:Boolean,
      default:false
    }
  },
  methods:{
    getSongList(item) {
      if(!this.handleClick) {
        return
      }
      let keyword = item.keyword;
      this.$fetch({
          url:'api/getSongList',
          data:{keyword:keyword,pagesize:100}
      }).then(res => {
          let odata = res.data.info.map(item => {
            return {
              songname:item.songname,
              singer:item.singername,
              albumname:item.album_name
            }
          })
          this.$store.commit('updateSongList',odata);
          this.$store.commit('updateOrigin','酷狗音乐')
          this.$router.push('/songs')
      }).catch(err => {
          console.log(err)
      })
    }
  },
  mounted(){
  }
}
</script>

<style lang="less" scoped>
  .item-box{
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    .item{
      display: inline-block;
      white-space:normal
    }
    .ttt{
      white-space: normal;
    }
    .play{
      position: absolute;
      bottom:10px;
      right:0;
      font-size: 10px;
      background: rgba(56, 56, 56, 0.3);
      border-radius: 5px;
    }
  }
</style>
