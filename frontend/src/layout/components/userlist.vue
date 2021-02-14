<template>
  <span>
    <span class="tools-item" @click="openUserList">账号管理</span>
    <!--修改账号弹窗-->
    <el-dialog
      title="账号列表"
      :visible.sync="dialogVisible"
      append-to-body
      width="500px">
      <el-table :data="tableData" border style="width: 100%" v-loading="loading">
        <el-table-column label="用户名" prop="username"></el-table-column>
        <el-table-column label="所属币商" prop="nickname"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="danger" icon="el-icon-delete" @click="dropuser(scope.row.username)">删除</el-button>
          </template>
        </el-table-column>
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
      dropuser (username) {
        this.$confirm('删除后不可恢复，确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let form = new FormData();
          form.append('username', username);
          this.loading = true;
          api.dropuser(form).then(res => {
            this.loading = false;
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.openUserList();
          }).catch(err => {
            this.loading = false;
            this.$message({
              message: err.msg,
              type: 'warning'
            })
          })
        })
      },
      openUserList () {
        this.dialogVisible = true;
        this.loading = true;
        api.getuserlist().then(res => {
          let arr = []
          res.data.users.forEach(item => {
            if (item.username != 'admin') {
              arr.push(item)
            }
          })
          this.tableData = arr;
          this.loading = false;
        })
      }
    },
    computed: {
      
    },
  };
</script>

<style scoped>
  
</style>