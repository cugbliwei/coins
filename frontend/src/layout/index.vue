<template>
  <div class="layout-index">
    <div class="header">
      <v-header></v-header>
    </div>
    <div class="content">
      <div class="content-body">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
  import vHeader from '@/layout/header'
  export default {
    name: "layout-index",
    components: {
      vHeader
    },
    mounted () {
      
    }
  }
</script>

<style scoped>
  .content {
    position: absolute;
    left: 0;
    top: 50px;
    right: 0;
    bottom: 0;
    overflow: auto;
  }
</style>