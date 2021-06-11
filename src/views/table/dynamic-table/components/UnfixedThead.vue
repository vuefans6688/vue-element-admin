<template>
  <div class="app-container">
    <div class="filter-container">
      <el-checkbox-group v-model="formThead">
        <el-checkbox label="苹果"> 苹果 </el-checkbox>
        <el-checkbox label="香蕉"> 香蕉 </el-checkbox>
        <el-checkbox label="桔子"> 桔子 </el-checkbox>
      </el-checkbox-group>
    </div>

    <el-table
      :data="tableData"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column prop="name" label="水果名" width="180" align="center" />
      <el-table-column
        v-for="fruit in formThead"
        :key="fruit"
        :label="fruit"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row[fruit] }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: '水果-1',
          apple: '苹果-10',
          banana: '香蕉-10',
          orange: '桔子-10'
        },
        {
          name: '水果-2',
          apple: '苹果-20',
          banana: '香蕉-20',
          orange: '桔子-20'
        }
      ],
      formThead: ['苹果', '香蕉']
    }
  }
}
</script>
