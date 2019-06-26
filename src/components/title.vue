<template>
  <div class="flex-row width-100">
    <div class="f-20 f-w">{{this.$route.meta.title}}</div>
    <div class="margin-left-15 margin-right-15 flex-1 flex-row search f-15" @click="search">
      <i class="iconfont icon-search"></i>
      <span class="color-9">搜索</span>
    </div>
    <i class="f-30 iconfont icon-tinggeshiqu" @click="tingGeShiQu"></i>
  </div>
</template>

<script>
export default {
  name: 'Title',
  data() {
    return {
      searchvalue: ''
    }
  },
  methods: {
    search() {

    },
    tingGeShiQu() {

    }
  }
}
</script>

<style lang="less" scoped>
  .search{
    height: 30px;
    border-radius: 15px;
    border: 1px solid #999;
    vertical-align: middle;
    color: #999
  }
</style>
