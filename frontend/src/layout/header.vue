<template>
  <div class="body">
    <div class="nav">
      <div class="logo">
        <i class="logo-icon">BIT</i>
        WELCOME, {{username}}
      </div>
      <div class="tools">
        <to-edit-account />
        <to-add-account v-if="username == 'admin'" />
        <edit-user-list v-if="username == 'admin'" />
        <span class="tools-item" @click="quik"><i class="el-icon-error"></i>退出</span>
      </div>
    </div>
  </div>
</template>
<script>
  import toEditAccount from './components/editAccount'
  import toAddAccount from './components/addAccount'
  import editUserList from './components/userlist'
  export default {
    components: {
      toEditAccount, toAddAccount, editUserList
    },
    mounted () {
      
    },
    data () {
      return {
      }
    },
    methods: {
      quik () {
        this.$store.commit("SET_NICKNAME", '');
        this.$router.replace({name: 'login'})
      }
    },
    computed: {
      username() {
        return this.$store.getters.GTE_USERNAME;
      },
    },
  };
</script>

<style scoped>
  .body {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 50px;
    overflow: hidden;
  }
  .frame {
    position: absolute;
    left: 0;
    top: 50px;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 1;
  }
  .nav {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 50px;
    overflow: auto;
    background: #1b2945;
    box-shadow: 0 0 8px #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #aeb9d8;
    z-index: 3;
    overflow: visible;
    font-size: 14px;
    padding: 0 12px;
  }
  .logo {
    font-size: 16px;
  }
  .logo-icon {
    display: inline-block;
    background: #006bcf;
    color: #fff;
    padding: 1px 8px 1px 4px;
    font-weight: bold;
    border-radius: 5px;
  }
  .tools {
    position: relative;
  }
</style>

<style>
  .tools-item {
    display: inline-block;
    margin-left: 12px;
    cursor: pointer;
  }
  .tools-item:hover {
    color: #409EFF;
  }
</style>