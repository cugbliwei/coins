<template>
  <div class="tab-col">
    <div class="tab-title">OTC出售原始数据</div>
    <div class="tab-containt" v-loading="loading">
      <el-table :data="tableData" border style="width: 100%" height="600">
        <el-table-column label="序号" width="50">
          <template slot-scope="scope">
            <span>
              {{scope.row.rank_cnt}}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="user_name" label="广告方">
          <template slot-scope="scope">
            <span :class="{'font': scope.row.user_name == nickname}">{{scope.row.user_name}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="trade_month_times" label="月报"></el-table-column>
        <el-table-column prop="order_complete_rate" label="完成率"></el-table-column>
        <el-table-column prop="trade_count" label="数量"></el-table-column>
        <el-table-column prop="price" label="单价"></el-table-column>
        <el-table-column label="限额" width="200">
          <template slot-scope="scope">
            <span>
              {{scope.row.min_trade_limit}} - {{scope.row.max_trade_limit}} CNY
            </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tableData', 'loading'],
  computed: {
    nickname() {
      return this.$store.getters.GTE_NICKNAME;
    },
  },
}
</script>

<style scoped>
  
</style>