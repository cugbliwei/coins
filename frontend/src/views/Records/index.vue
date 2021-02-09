<template>
  <div class="g-body">
    <div class="condition">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="币种">
          <el-select v-model="formInline.coin_name">
            <el-option v-for="item in coin_list" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收款方式">
          <el-select v-model="formInline.pay_type">
            <el-option v-for="item in paywayList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="自动刷新间隔">
          <el-select v-model="formInline.autoRenew">
            <el-option v-for="item in autoRenewList" :key="item.label" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="蓝盾">
          <el-switch v-model="formInline.landun"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button :disabled="origin_loading || summary_loading" type="primary" icon="el-icon-search" @click="search">开始查询</el-button>
        </el-form-item>
        <!-- <el-form-item>
          <el-button :disabled="origin_loading || summary_loading" type="danger" icon="el-icon-error">停止刷新</el-button>
        </el-form-item> -->
      </el-form>
    </div>
    <div class="custom-tabel">
      <div class="custom-tabel-item">
        <otc-out-summary :tableData="summary_out" :loading="summary_loading" />
        <otc-out :tableData="origin_out" :loading="origin_loading" />
      </div>
      <div class="custom-tabel-item">
        <otc-in-summary :tableData="summary_in" :loading="summary_loading" />
        <otc-in :tableData="origin_in" :loading="origin_loading" />
      </div>
    </div>
  </div>
</template>

<script>
import otcOut from './components/otc-out'
import otcOutSummary from './components/otc-out-summary'
import otcIn from './components/otc-in'
import otcInSummary from './components/otc-in-summary'
import api from '@/api/records'
export default {
  components: {
    otcOut, otcOutSummary, otcIn, otcInSummary
  },
  data () {
    return {
      origin_loading: false,
      summary_loading: false,
      coin_list: [
        { label: 'USDT', value: 'USDT'},
        { label: 'BTC', value: 'BTC'},
        { label: 'ETH', value: 'ETH'},
        { label: 'EOS', value: 'EOS'},
        { label: 'XRP', value: 'XRP'},
        { label: 'LTC', value: 'LTC'},
        { label: 'HT', value: 'HT'},
        { label: 'HUSD', value: 'HUSD'},
      ],
      paywayList: [
        { label: '银行卡', value: '1'},
        { label: '微信', value: '2'},
        { label: '支付宝', value: '3'},
      ],
      autoRenewList: [
        { label: '10秒', value: 10},
        { label: '20秒', value: 20},
        { label: '30秒', value: 30},
        { label: '不自动刷新', value: -1},
      ],
      summary_out: [],
      origin_out: [],
      summary_in: [],
      origin_in: [],
      formInline: {
        coin_name: '',
        pay_type: '',
        autoRenew: '',
        landun: false,
      }
    }
  },
  methods: {
    search () {
      let form = new FormData();
      form.append('coin_name', this.formInline.coin_name)
      form.append('landun', this.formInline.landun ? 1 : 0)
      form.append('pay_type', this.formInline.pay_type)
      this.origin_loading = true;
      this.summary_loading = true;
      this.summary_out = [];
      this.origin_out = [];
      this.summary_in = [];
      this.origin_in = [];
      this.getOringin(form);
      this.getSummary(form);
    },
    getSummary (form) {
      api.api_sumary(form).then(res => {
        if (res.data.buy) {
          this.summary_in = res.data.buy
        }
        if (res.data.sell) {
          this.summary_out = res.data.sell
        }
        this.summary_loading = false;
      }).catch(err => {
        this.$message({
          message: '查询汇总数据失败',
          type: 'warning'
        })
        this.summary_loading = false;
      })
    },
    getOringin (form) {
      api.api_origin(form).then(res => {
        if (res.data.buy) {
          this.origin_in = res.data.buy
        }
        if (res.data.sell) {
          this.origin_out = res.data.sell
        }
        this.origin_loading = false;
      }).catch(err => {
        this.$message({
          message: '查询源数据失败',
          type: 'warning'
        })
        this.origin_loading = false;
      })
    }
  }
}
</script>

<style scoped>
 .kindess-item {
   font-size: 16px;
   color: #333;
   font-weight: bold;
   display: inline-block;
   margin: 12px 12px;
   border-bottom: 2px solid #fff;
   padding-bottom: 8px;
   cursor: pointer;
 }
 .kindess-item:hover {
   color: #ef5656;
 }
 .active {
   color: #ef5656;
   border-color: #ef5656;
 }
 .custom-tabel {
   display: flex;
   justify-content: space-between;
   position: relative;
 }
 .custom-tabel-item {
   flex-shrink: 1;
   width: 49%;
   overflow: hidden;
 }
</style>

<style>
  .custom-tabel .el-table td, .custom-tabel .el-table th {
    padding: 5px 0;
  }
  .tab-title {
    color: #1b2945;
    font-size: 16px;
    padding: 6px 6px;
    border-bottom: 1px solid #ededed;
    background: #efefef;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .speed {
    font-size: 12px;
    color: #000;
    margin-left: 20px;
  }
</style>