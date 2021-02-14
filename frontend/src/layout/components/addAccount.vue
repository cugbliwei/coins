<template>
  <span>
    <span class="tools-item" @click="toEditAccount"><i class="el-icon-plus"></i>新增账号</span>
    <!--修改账号弹窗-->
    <el-dialog
      title="新增账号"
      :visible.sync="dialogVisible"
      append-to-body
      width="500px">
      <el-form label-width="80px" :model="formObj" :rules="rules" ref="ruleForm">
        <el-form-item label="账号" prop="username">
          <el-input v-model="formObj.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formObj.password"></el-input>
        </el-form-item>
        <el-form-item label="币商">
          <el-input v-model="formObj.nickname"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" :disabled="loading">取 消</el-button>
        <el-button type="primary" @click="save" :disabled="loading">保 存</el-button>
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
        formObj: {
          username: '',
          password: '',
          nickname: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        },
      }
    },
    methods: {
      toEditAccount () {
        this.dialogVisible = true;
      },
      save () {
        this.$refs.ruleForm.validate(pass => {
          if (pass) {
            this.apiSave()
          }
        })
      },
      apiSave () {
        this.loading = true;
        let form = new FormData();
        form.append('username', this.formObj.username);
        form.append('password', this.formObj.password);
        form.append('nickname', this.formObj.nickname);
        api.adduser(form).then(res => {
          if (res.data.status == true) {
            this.$message({
              message: '账号已添加',
              type: 'success'
            })
            for (let item in this.formObj) {
              this.formObj[item] = ''
            }
            this.loading = false;
            this.dialogVisible = false;
          }
        }).catch(err => {
          this.$message({
            message: '添加失败',
            type: 'warning'
          })
          this.loading = false;
        })
      },
    },
    computed: {
      
    },
  };
</script>

<style scoped>

</style>