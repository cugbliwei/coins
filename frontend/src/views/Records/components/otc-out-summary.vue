<template>
  <div class="tab-col">
    <div class="tab-title">OTC出售</div>
    <div class="tab-containt">
      <el-table :data="outRankData" border style="width: 100%" height="100" v-loading="rankLoading">
        <el-table-column prop="price" label="我的金额"></el-table-column>
        <el-table-column prop="trade_count" label="数量"></el-table-column>
        <el-table-column prop="rank_cnt" label="我的排名"></el-table-column>
        <el-table-column prop="number" label="前10预计"></el-table-column>
      </el-table>
      <div class="tab-title">
        OTC出售汇总
        <span class="speed">
          吞吐速度: {{speedOut}}
        </span>
      </div>
      <el-table :data="tableData" border style="width: 100%" height="200" v-loading="loading">
        <el-table-column prop="price" label="汇总单价"></el-table-column>
        <el-table-column prop="price_cnt" label="单价数量"></el-table-column>
        <el-table-column prop="trade_count_sum" label="总币数"></el-table-column>
        <el-table-column prop="trade_count_avg" label="平均币数"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tableData', 'tableSummary', 'loading', 'rankLoading', 'outRankData', 'speedOut'],
}
</script>

<style scoped>
  
</style>