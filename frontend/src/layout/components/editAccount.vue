<template>
  <span>
    <span class="tools-item" @click="toEditAccount"><i class="el-icon-edit"></i>修改账号信息</span>
    <!--修改账号弹窗-->
    <el-dialog
      title="修改当前账号信息"
      :visible.sync="dialogVisible"
      append-to-body
      width="500px">
      <el-form label-width="80px" :model="formObj"ref="ruleForm">
        <el-form-item label="密码">
          <el-input v-model="formObj.password"></el-input>
        </el-form-item>
        <el-form-item label="币商">
          <el-input v-model="formObj.nickname"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" :disabled="loading">取 消</el-button>
        <el-button type="primary" @click="update" :disabled="loading">保 存</el-button>
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
        loading: false,
        dialogVisible: false,
        formObj: {
          password: '',
          nickname: '',
        },
      }
    },
    methods: {
      toEditAccount () {
        this.dialogVisible = true
      },
      update () {
        this.$refs.ruleForm.validate(pass => {
          if (pass) {
            this.apiUpdate()
          }
        })
      },
      formatStr (str) {
        return str.replace(/\s/g,"");
      },
      apiUpdate () {
        this.loading = true;
        let form = new FormData();
        if (this.formatStr(this.formObj.password) != '') {
          form.append('password', this.formObj.password);
        }
        if (this.formatStr(this.formObj.nickname) != '') {
          form.append('nickname', this.formObj.nickname);
        }
        form.append('username', this.username);
        api.updateuser(form).then(res => {
          if (res.data.status == true) {
            this.$message({
              message: '账号已更新',
              type: 'success'
            })
            this.$store.commit("SET_NICKNAME", this.formObj.nickname);
            for (let item in this.formObj) {
              this.formObj[item] = ''
            }
            this.loading = false;
            this.dialogVisible = false;
          } else {
            this.$message({
              message: res.data.msg,
              type: 'warning'
            })
            this.loading = false;
          }
        }).catch(err => {
          this.$message({
            message: '账号更新失败',
            type: 'warning'
          })
          this.loading = false;
        })
      },
    },
    computed: {
      username() {
        return this.$store.getters.GTE_USERNAME;
      },
    },
  };
</script>

<style scoped>
  .tools-item {
    display: inline-block;
    margin-left: 12px;
    cursor: pointer;
  }
  .tools-item:hover {
    color: #409EFF;
  }
  .tools-item:first-child {
    margin-left: 0;
  }
</style>