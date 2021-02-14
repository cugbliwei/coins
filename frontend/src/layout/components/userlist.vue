<template>
  <span>
    <span class="tools-item" @click="openUserList">账号管理</span>
    <!--修改账号弹窗-->
    <el-dialog
      title="账号管理"
      :visible.sync="dialogVisible"
      append-to-body
      width="500px">
      <el-table :data="tableData" border style="width: 100%" >
        <el-table-column label="序号" width="60" align="center"></el-table-column>
        <el-table-column label="用户名"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" :disabled="loading">关 闭</el-button>
      </span>
    </el-dialog>
  </span>
</template>
<script>
  import api from '@/api/user'
  export default {
    mounted () {
      
    },
    data () {
      return {
        dialogVisible: false,
        loading: false,
        tableData: [],
      }
    },
    methods: {
     openUserList () {
       this.dialogVisible = true;
       this.loading = true;
       api.getuserlist().then(res => {
         console.log(res)
       })
     }
    },
    computed: {
      
    },
  };
</script>

<style scoped>
  
</style>