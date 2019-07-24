<template>
  <div class="discover">
    <Title title="发现"></Title>
  </div>
</template>

<script>
import Title from '../../components/title'

export default {
  name: 'Discover',
  components:{
    Title
  },
  data() {
    return {
      
    }
  },
  computed:{
    userdata() {
      return this.$store.state.userdata;
    }
  }
}
</script>

<style lang="less" scoped>
  .discover{
    padding:10px 10px 125px 10px
  }
</style>
