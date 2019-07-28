<template>
    <div class="padding-15">
        <div class="f-12">搜索结果来自{{origin}}</div>
        <div class="flex-row padding-10 margin-top-15 border-bottom ">
            <div class="flex-1 text-ellipsis text-left">歌曲</div>
            <div class="text-ellipsis text-left" style="width:70px">歌手</div>
            <div class="text-ellipsis text-left" style="width:70px">专辑</div>
        </div>
        <div v-for="(item,index) in songList" :key="index" @click="currentIndex = index">
            <div class="flex-row padding-10">
                <div class="flex-1 text-ellipsis text-left">{{item.songname}}</div>
                <div style="width:40px" v-if="currentIndex === index"><i class="iconfont icon-play f-20" @click="changePlaying(item)"></i></div>
                <div class="text-ellipsis text-left" style="width:70px">{{item.singer}}</div>
                <div class="text-ellipsis text-left" style="width:70px">{{item.albumname}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { debuglog } from 'util';
import { setTimeout } from 'timers';
export default {
    name: 'Songs',
    data() {
        return {
            tempSongList:[],
            currentIndex: 999
        }
    },
    methods: {
       changePlaying(item) {
           let oData = {
            "img":item.img || 'https://y.gtimg.cn/music/photo_new/T001R150x150M000000IBYF50SRnXP.jpg',
            "name":item.songname,
            "singer":item.singer,
            "time":""
           }
           this.$store.commit('updateSongData', oData)
       },
       show() {
           if(!this.songList.length) {
               this.$router.push('/home')
           }
       }
    },
    mounted() {
      this.show()
    },
    watch: {
        currentIndex(val) {
            if(this.currentIndex !== 999) {
                setTimeout(() => {
                    this.currentIndex = 999
                },3000)
            }
        }
    },
    computed: {
        songList() {
            return this.$store.state.songlist
        },
        origin() {
            return this.$store.state.origin
        }
    }
}
</script>

<style lang="less" scoped>

</style>
