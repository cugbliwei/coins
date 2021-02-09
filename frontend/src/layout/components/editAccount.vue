<template>
  <span>
    <span class="tools-item" @click="toEditAccount"><i class="el-icon-edit"></i>修改账号信息</span>
    <!--修改账号弹窗-->
    <el-dialog
      title="修改账号信息"
      :visible.sync="dialogVisible"
      append-to-body
      width="50%">
      <el-form label-width="80px" :model="formObj">
        <el-row>
          <el-col :span="12">
            <el-form-item label="密码">
              <el-input v-model="formObj.password"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="币商">
              <el-input v-model="formObj.company"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
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
          account: '',
          password: '',
          company: '',
        }
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