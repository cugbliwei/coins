<template>
  <div class="tab-col">
    <div class="tab-title">OTC出售</div>
    <div class="tab-containt">
      <el-table :data="tableSummary" border style="width: 100%" height="100">
        <el-table-column prop="company" label="我的金额"></el-table-column>
        <el-table-column prop="number" label="数量"></el-table-column>
        <el-table-column prop="month" label="我的排名"></el-table-column>
        <el-table-column prop="number" label="前10预计"></el-table-column>
      </el-table>
      <div class="tab-title">
        OTC出售汇总
        <span class="speed">
          吞吐速度: 读取数据至15列 - 时间30s - 123.123
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
  props: ['tableData', 'tableSummary', 'loading'],
}
</script>

<style scoped>
  
</style>