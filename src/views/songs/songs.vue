<template>
    <div class="padding-15">
        <div>搜索结果</div>
        <div class="flex-row padding-10 margin-top-15   ">
            <div class="flex-1 text-ellipsis text-left">歌曲</div>
            <div class="text-ellipsis text-left" style="width:70px">歌手</div>
            <div class="text-ellipsis text-left" style="width:70px">专辑</div>
        </div>
        <div v-for="(item,index) in songList" :key="index" @click="currentIndex = index">
            <div class="flex-row padding-10">
                <div class="flex-1 text-ellipsis text-left">{{item.data.songname}}</div>
                <div style="width:40px" v-if="currentIndex === index"><i class="iconfont icon-play f-20" @click="changePlaying(item)"></i></div>
                <div class="text-ellipsis text-left" style="width:70px">{{item.data.singer[0].name}}</div>
                <div class="text-ellipsis text-left" style="width:70px">{{item.data.albumname}}</div>
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
            "img":item.data.img || 'https://y.gtimg.cn/music/photo_new/T001R150x150M000000IBYF50SRnXP.jpg',
            "name":item.data.songname,
            "singer":item.data.singer[0].name,
            "time":""
           }
           this.$store.commit('updateSongData', oData)
       }
    },
    mounted() {
      
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
        }
    }
}
</script>

<style lang="less" scoped>

</style>
