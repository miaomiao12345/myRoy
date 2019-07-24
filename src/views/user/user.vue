<template>
  <div>{{base}}</div>
</template>

<script>
export default {
  name: 'User',
  props:{
    base:''
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

</style>

