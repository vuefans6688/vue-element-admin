<template>
  <div class="app-container">
    <el-input
      v-model="filename"
      placeholder="请输入文件名（默认excel列表）"
      style="width: 350px"
      prefix-icon="el-icon-document"
    />
    <el-button
      :loading="downloadLoading"
      style="margin-bottom: 20px"
      type="primary"
      icon="el-icon-document"
      @click="handleDownload"
    >
      导出选项
    </el-button>
    <a
      href="https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html"
      target="_blank"
      style="margin-left: 15px"
    >
      <el-tag type="info">文档</el-tag>
    </a>
    <el-table
      ref="multipleTable"
      v-loading="listLoading"
      :data="list"
      element-loading-text="拼命加载中"
      border
      fit
      highlight-current-row
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" align="center" />
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="标题" align="center">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="作者" width="110" align="center">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.author }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="阅读" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="日期" width="220">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/article'

export default {
  name: 'SelectExcel',
  data() {
    return {
      list: null,
      listLoading: true,
      multipleSelection: [],
      downloadLoading: false,
      filename: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    handleDownload() {
      if (this.multipleSelection.length) {
        this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const tableHeader = ['ID', '标题', '作者', '阅读', '日期']
          const filterValues = ['id', '标题', '作者', '阅读', '日期']
          const list = this.multipleSelection
          const data = this.formatJson(filterValues, list)
          excel.export_json_to_excel({
            header: tableHeader,
            data,
            filename: this.filename
          })
          this.$refs.multipleTable.clearSelection()
          this.downloadLoading = false
        })
      } else {
        this.$message({
          message: '请至少选择一项',
          type: 'warning'
        })
      }
    },
    formatJson(filterValues, jsonData) {
      return jsonData.map(v => filterValues.map(j => v[j]))
    }
  }
}
</script>
