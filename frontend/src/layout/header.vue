<template>
  <div class="body">
    <div class="nav">
      <div class="logo">
        <i class="logo-icon">BIT</i>
        WELCOME
      </div>
      <div class="tools">
        <span class="tools-item" @click="toEditAccount"><i class="el-icon-edit"></i>修改账号信息</span>
        <span class="tools-item"><i class="el-icon-error"></i>退出</span>
      </div>
    </div>
    <!--修改账号弹窗-->
    <el-dialog
      title="修改账号信息"
      :visible.sync="dialogVisible"
      width="50%">
      <el-form label-width="80px" :model="formObj">
        <el-row>
          <el-col :span="12">
            <el-form-item label="账号名">
              <el-input v-model="formObj.account"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="密码">
              <el-input v-model="formObj.password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">保 存</el-button>
      </span>
    </el-dialog>
  </div>
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