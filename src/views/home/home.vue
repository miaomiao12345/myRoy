<template>
  <div class="content bg-theme width-100 height-100">
    <Title></Title>
    <div class="flex-column width-100">
      <mt-swipe :auto='4000' class="width-100 margin-top-15" style="height:150px" >
        <mt-swipe-item v-for="(item,index) in baseData.imgs" :key="index"><img :src="item" alt=""></mt-swipe-item>
      </mt-swipe>
      <div class="margin-top-15 ics width-100">
        <div v-for="(item,index) in ics" :key="index" @click="getRankList">
          <i :class="[item.icon,'iconfont','f-30']" style="color:rgb(214, 138, 67)"></i>
          <div class="f-15">{{item.text}}</div>
        </div>
      </div>
      <div class="flex-row margin-top-15 width-100">
        <div class="diantai" @click="getRecommend">
          <i class="iconfont icon-play1 f-30 color-f"></i>
          <div class="f-15 color-f">个性电台</div>
        </div>
        <div class=" flex-1 margin-left-30">
          <div class="gxdt width-100 flex-row margin-top-5" v-for="(item,index) in baseData.gexingdiantai" :key="index">
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
      <Card title="为你推荐歌单" :datalist="baseData.tjgd"></Card>
      <Card title="精选视频" :datalist ="baseData.flzq" :imgStyle="flzqStyle"></Card>
      <div class="dingzhi width-100 f-15 margin-top-30" v-if="userdata.is_login">
        <div>Hi, {{userdata.username}}</div>
        <div class="flex-row width-100 margin-top-15">
          <div class="line margin-right-15"></div>
          <div>你的专属定制</div>
          <div class="line margin-left-15"></div>
        </div>
        <div class="width-100 flex-row margin-top-10" v-for="(item,index) in userdata.dingzhi" :key="index">
          <img :src="item.img" alt="">
          <div class="flex-1 text-center">{{item.title}}</div>
        </div>
      </div>
    </div>

    <!-- 搜索框 -->
    <div class="search padding-top-30" v-if="search">
      <mt-search
          v-model="value"
          cancel-text="取消"
          placeholder="搜索歌曲/歌手/歌词/专辑等"
          @keyup.enter.native="handleSearch"
          :autofocus="autofocus">
      </mt-search>
    </div>
  </div>
  
</template>

<script>
import {Toast} from 'mint-ui'
import Title from '../../components/title'
import Card from './component/card'

export default {
  name: 'Home',
  props:{
    base:''

  },
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
      flzqStyle: {
        width:'200px',
        height:'90px'
      },
      value: '',
      autofocus: true
    }
  },
  computed:{
    userdata() {
      return this.$store.state.userdata
    },
    search() {
      return this.$store.state.search
    }
  },
  components: {
    Title,
    Card
  },
  methods:{
    getInitData() {
      this.$fetch({
        url: 'webapi/home/initData'
      }).then(res => {
        this.baseData = res.data;
      }).catch(err => {
        Toast(err.msg)
      })
    },
    handleSearch() {
      if(!this.value) {
        this.getRankList();
        return;
      }
      this.$fetch({
          url:'api/getSongList',
          data:{keyword: this.value}
      }).then(res => {
          let odata = res.data.info.map(item => {
            return {
              songname:item.songname,
              singer:item.singername,
              albumname:item.album_name
            }
          })
          this.$store.commit('updateSongList',odata);
          this.$store.commit('updateSearch', false)
          this.$store.commit('updateOrigin','酷狗音乐')
          this.$router.push('/songs')
      }).catch(err => {
          console.log(err)
      })
    },
    getRecommend() {
      this.$fetch({
        url:'api/getDiscList'
      }).then(res => {
        let odata = res.songlist.map(item => {
          let album = item.data.albumid || '';
          let len = album.toString().length;
          let albumid = album.toString().slice(len-2);
          albumid = albumid.indexOf('0') == 0 ? albumid.slice(1) : albumid;
          return {
            songname:item.data.songname,
            singer:item.data.singer[0].name,
            albumname:item.data.albumname,
            img:`http://imgcache.qq.com/music/photo/album_300/${albumid}/300_albumpic_${item.data.albumid}_0.jpg`
          }
        })
        this.$store.commit('updateSongList',odata);
        this.$store.commit('updateOrigin','qq音乐')
        this.$router.push('/songs')
      }).catch(err => {
        console.log(err)
      })
    },
    getRankList() {
      this.$fetch({
        url:'api/getRankList'
      }).then(res => {
        let odata = res.songlist.map(item => {
          let album = item.data.albumid || '';
          let len = album.toString().length;
          let albumid = album.toString().slice(len-2);
          albumid = albumid.indexOf('0') == 0 ? albumid.slice(1) : albumid;
          return {
            songname:item.data.songname,
            singer:item.data.singer[0].name,
            albumname:item.data.albumname,
            img:`http://imgcache.qq.com/music/photo/album_300/${albumid}/300_albumpic_${item.data.albumid}_0.jpg`
          }
        })
        this.$store.commit('updateSongList',odata);
        this.$store.commit('updateOrigin','qq音乐')
        this.$router.push('/songs')
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    this.getInitData()
  }
}
</script>

<style lang="less" scoped>
  .content{
    padding: 10px 10px 125px 10px;
    position: relative;
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
      overflow: hidden;
    }
    .dingzhi{
      .line{
        width: 80px;
        height: 1px;
        transform: scaleY(0.5);
        background: #999
      }
      img{
        width: 100px;
        height: 100px;
      }
    }
    .search{
      background: #fff;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height:750px;
      z-index: 20;
    }
  }

</style>

