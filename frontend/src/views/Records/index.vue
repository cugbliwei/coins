<template>
  <div class="g-body datas">
    <div class="condition">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="币种">
          <el-select v-model="formInline.coin_name" :disabled="autorenewStatu">
            <el-option v-for="item in coin_list" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收款方式">
          <el-select v-model="formInline.pay_type" clearable :disabled="autorenewStatu">
            <el-option v-for="item in paywayList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="吞吐量">
          <el-select v-model="formInline.number" clearable :disabled="autorenewStatu">
            <el-option v-for="item in speedList" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="自动刷新">
          <el-switch v-model="formInline.autorenew" :disabled="autorenewStatu"></el-switch>
        </el-form-item>
        <el-form-item label="蓝盾">
          <el-switch v-model="formInline.landun" :disabled="autorenewStatu"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button 
            v-show="!autorenewStatu" 
            :disabled="origin_loading || summary_loading" 
            type="primary" 
            icon="el-icon-search"
            @click="search">
            {{formInline.autorenew > 0 ? '自动刷新' : '开始查询'}}
          </el-button>
          <el-button 
            v-show="autorenewStatu" 
            type="danger" 
            icon="el-icon-error" 
            @click="stopAuto">
            取消自动刷新
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="custom-tabel">
      <div class="custom-tabel-item">
        <otc-out-summary 
          :tableData="summary_out" 
          :loading="summary_loading" 
          :out-rank-data="outRankData"
          :rankLoading="rank_loading"
          :speed-out="speed_out"
          :autorenew-statu="autorenewStatu" />
        <otc-out 
          :tableData="origin_out" 
          :loading="origin_loading" />
      </div>
      <div class="custom-tabel-item">
        <otc-in-summary 
          :tableData="summary_in" 
          :loading="summary_loading" 
          :in-rank-data="inRankData"
          :rankLoading="rank_loading"
          :speed-in="speed_in"
          :autorenew-statu="autorenewStatu" />
        <otc-in 
          :tableData="origin_in" 
          :loading="origin_loading" />
      </div>
    </div>
    <div>
      <audio 
        v-for="(item, index) in audioList" 
        :src="item" 
        :key="index" 
        preload 
        ref="audioActive"></audio>
    </div>
  </div>
</template>

<script>
import otcOut from './components/otc-out'
import otcOutSummary from './components/otc-out-summary'
import otcIn from './components/otc-in'
import otcInSummary from './components/otc-in-summary'
import api from '@/api/records'
import sound_1 from '@/assets/sound/01.mp3'
import sound_2 from '@/assets/sound/02.mp3'
import sound_3 from '@/assets/sound/03.mp3'
import sound_4 from '@/assets/sound/04.mp3'
import sound_5 from '@/assets/sound/05.mp3'
import sound_6 from '@/assets/sound/06.mp3'
export default {
  components: {
    otcOut, otcOutSummary, otcIn, otcInSummary
  },
  computed: {
    nickname() {
      return this.$store.getters.GTE_NICKNAME;
    },
  },
  data () {
    return {
      origin_loading: false,
      summary_loading: false,
      rank_loading: false,
      audioList: [sound_1, sound_2, sound_3, sound_4, sound_5, sound_6],
      audioTeam: [0,1,3],
      audioActive: 0,
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
      summary_out: [],
      origin_out: [],
      summary_in: [],
      origin_in: [],
      outRankData: [],
      inRankData: [],
      formInline: {
        coin_name: 'USDT',
        pay_type: '2',
        landun: false,
        number: 10,
        autorenew: false,
      },
      speedList: [
        {label: '10行', value: 10},
        {label: '15行', value: 15},
        {label: '20行', value: 20},
      ],
      speed_in: 0,
      speed_out: 0,
      autorenewObj: null,
      autorenewStatu: false,
    }
  },
  methods: {
    stopAuto () {
      clearInterval(this.autorenewObj);
      this.autorenewStatu = false;
      this.formInline.autorenew = false;
    },
    search () {
      if (this.formInline.autorenew == true) {
        this.toSearch();
        this.autorenewStatu = true;
        this.autorenewObj = setInterval(() => {
          let loaded = this.origin_loading == false && this.summary_loading == false && this.rank_loading == false;
          loaded && this.toSearch();
        }, 5 * 1000);
      } else {
        this.toSearch();
      }
    },
    toSearch () {
      let form = new FormData();
      form.append('coin_name', this.formInline.coin_name)
      form.append('landun', this.formInline.landun ? 1 : 0)
      form.append('pay_type', this.formInline.pay_type)
      form.append('nickname', this.nickname)
      form.append('number', this.formInline.number)
      this.origin_out = [];
      this.origin_in = [];
      this.getOringin(form);
    },
    getSpeed (form) {
      api.api_speed(form).then(res => {
        this.speed_in = res.data.buy;
        this.speed_out = res.data.sell;
      }).catch(err => {
        this.$message({
          message: '查询吞吐量数据失败',
          type: 'warning'
        })
      })
    },
    getRank (form) {
      this.rank_loading = true;
      api.api_rank(form).then(res => {
        this.inRankData = res.data.buy || [];
        this.outRankData = res.data.sell || [];
        
        // 语音提示 开始
        let rank_data_str = sessionStorage.getItem('rank_data');
        let rank_data = {};
        let rank_data_source = {
          rank_buy_20: !!res.data.buy.find(item => item.rank_cnt <= 20),
          rank_buy_10: !!res.data.buy.find(item => item.rank_cnt <= 10),
          rank_sell_20: !!res.data.sell.find(item => item.rank_cnt <= 20),
          rank_sell_10: !!res.data.sell.find(item => item.rank_cnt <= 10),
        };
        if (!rank_data_str) {
          if (rank_data_source.rank_sell_20 == true) this.$refs.audioActive[0].play();
          if (rank_data_source.rank_sell_10 == true) this.$refs.audioActive[1].play();
          if (rank_data_source.rank_buy_20 == true) this.$refs.audioActive[2].play();
          if (rank_data_source.rank_buy_10 == true) this.$refs.audioActive[3].play();
        } else {
          rank_data = JSON.parse(rank_data_str)
          if (rank_data_source.rank_sell_20 == true && rank_data.rank_sell_20 == false) this.$refs.audioActive[0].play();
          if (rank_data_source.rank_sell_10 == true && rank_data.rank_sell_10 == false) this.$refs.audioActive[1].play();
          if (rank_data_source.rank_buy_20 == true && rank_data.rank_buy_20 == false) this.$refs.audioActive[2].play();
          if (rank_data_source.rank_buy_10 == true && rank_data.rank_buy_10 == false) this.$refs.audioActive[3].play();
        }
        sessionStorage.setItem('rank_data', JSON.stringify(rank_data_source))
        // 语音提示 结束
        this.$nextTick(() => {
          this.rank_loading = false;
        })
      }).catch(err => {
        // this.$message({
        //   message: '查询排名数据失败',
        //   type: 'warning'
        // })
        this.rank_loading = false;
      })
    },
    getSummary (form) {
      this.summary_loading = true;
      api.api_sumary(form).then(res => {
        if (res.data.buy) {
          this.summary_in = res.data.buy
        }
        if (res.data.sell) {
          this.summary_out = res.data.sell
        }

        // 语音提示 开始
        let summary_data_str = sessionStorage.getItem('summary_data')
        let summary_data_source = {
          summary_buy_10: res.data.buy[0].price_cnt > 10,
          summary_sell_10: res.data.sell[0].price_cnt > 10,
        }
        if (!summary_data_str) {
          if (summary_data_source.summary_sell_10 == true) this.$refs.audioActive[4].play();
          if (summary_data_source.summary_buy_10 == true) this.$refs.audioActive[5].play();
        } else {
          let summary_data = JSON.parse(summary_data_str)
          if (summary_data_source.rank_sell_20 == true && summary_data.rank_sell_20 == false) this.$refs.audioActive[0].play();
          if (summary_data_source.rank_sell_10 == true && summary_data.rank_sell_10 == false) this.$refs.audioActive[1].play();
        }
        sessionStorage.setItem('summary_data', JSON.stringify(summary_data_source))
        // 语音提示 结束

        this.$nextTick(() => {
          this.summary_loading = false;
        })
      }).catch(err => {
        this.$message({
          message: '查询汇总数据失败',
          type: 'warning'
        })
        this.summary_loading = false;
      })
    },
    getOringin (form) {
      this.origin_loading = true;
      api.api_origin(form).then(res => {
        if (res.data.buy) {
          this.origin_in = res.data.buy
        }
        if (res.data.sell) {
          this.origin_out = res.data.sell
        }
        this.getRank(form);
        this.getSpeed(form);
        this.getSummary(form);
        this.$nextTick(() => {
          this.origin_loading = false;
        })
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
    color: #ff6a00;
    margin-left: 20px;
  }
  .datas .el-table {
    font-size: 18px;
  }
  .font {
    font-weight: bold; 
    color: red;
  }
</style>