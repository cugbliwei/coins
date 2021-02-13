<template>
  <div class="tab-col">
    <div class="tab-title">OTC出售</div>
    <div class="tab-containt">
      <el-table :data="rankData" border style="width: 100%" height="100" v-loading="rankLoading">
        <el-table-column prop="price" label="我的金额"></el-table-column>
        <el-table-column prop="trade_count" label="数量"></el-table-column>
        <el-table-column prop="rank_cnt" label="我的排名">
          <template slot-scope="scope">
            <span style="font-weight: bold; color: red;">{{scope.row.rank_cnt}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="rank_time" width="250">
          <template slot="header" slot-scope="scope">
            名次耗时预估(分钟)
            <select name="grade" id="grade" v-model="grade" :disabled="autorenewStatu">
              <option value="5">前5名</option>
              <option value="10">前10名</option>
            </select>
          </template>
        </el-table-column>
      </el-table>
      <div class="tab-title">
        OTC出售汇总
        <span class="speed">
          吞吐速度: {{speedOut}}
        </span>
      </div>
      <el-table :data="tableData" border style="width: 100%" height="200" v-loading="loading">
        <el-table-column prop="price" label="汇总单价"></el-table-column>
        <el-table-column prop="price_cnt" label="单价数量">
          <template slot-scope="scope">
            <span style="font-weight: bold; color: red;">{{scope.row.price_cnt}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="trade_count_sum" label="总币数"></el-table-column>
        <el-table-column prop="trade_count_avg" label="平均币数"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tableData', 'tableSummary', 'loading', 'rankLoading', 'outRankData', 'speedOut', 'autorenewStatu'],
  data () {
    return {
      grade: 10,
      rankData: [],
    }
  },
  watch: {
    outRankData () {
      this.init_rank_time()
    },
    grade () {
      this.caculate_rank_time()
    },
  },
  methods: {
    rank_caculate (rank_1_time, rank_cnt) { // rank_1_time: 上升至第一名总耗时  rank_cnt: 当前排名
      let active = rank_cnt > this.grade; // 是否在目标名次之外
      if (rank_1_time < 0) {
        return 9999 + 'min';
      } else if (active) {
        let seconds = rank_1_time.toFixed(1) * 60; // 时间单位转换为秒
        let step = seconds/(rank_cnt-1); // 步进值，每上升一名耗时
        let reduce = rank_cnt - this.grade; // 需要上升的名次
        let cost_time = (step*reduce).toFixed(0);
        return (cost_time/60).toFixed(1) + ' min';
      } else {
        return 0 + 'min';
      }
    },
    init_rank_time () { // 初始化数据，添加默认名次耗时
      this.rankData = this.outRankData.map(item => {
        return {
          ...item,
          rank_time: this.rank_caculate(item.entry_rank_1, item.rank_cnt),
        }
      })
    },
    caculate_rank_time () { // 改变名次范围，重新计算名次耗时
      this.rankData = this.outRankData.map(item => {
        return {
          ...item,
          rank_time: this.rank_caculate(item.entry_rank_1, item.rank_cnt),
        }
      })
    },
  },
}
</script>

<style scoped>
  
</style>