<template>
  <span>
    <span class="tools-item" @click="toEditAccount"><i class="el-icon-edit"></i>修改账号信息</span>
    <!--修改账号弹窗-->
    <el-dialog
      title="修改当前账号信息"
      :visible.sync="dialogVisible"
      append-to-body
      width="500px">
      <el-form label-width="80px" :model="formObj" :rules="rules" ref="ruleForm">
        <el-form-item label="密码" prop="password">
          <el-input v-model="formObj.password"></el-input>
        </el-form-item>
        <el-form-item label="币商">
          <el-input v-model="formObj.company"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">保 存</el-button>
      </span>
    </el-dialog>
  </span>
</template>
<script>
  export default {
    mounted () {
      
    },
    data () {
      return {
        dialogVisible: false,
        formObj: {
          password: '',
          company: '',
        },
        rules: {
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        },
      }
    },
    methods: {
      toEditAccount () {
        this.dialogVisible = true
      },
    },
    computed: {
      
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