<template>
  <div class="app-container">
    <el-input
      v-model="filename"
      placeholder="请输入文件名（默认文件）"
      style="width: 300px"
      prefix-icon="el-icon-document"
    />
    <el-button
      :loading="downloadLoading"
      style="margin-bottom: 20px"
      type="primary"
      icon="el-icon-document"
      @click="handleDownload"
    >
      导出Zip
    </el-button>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="拼命加载中"
      border
      fit
      highlight-current-row
    >
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
      <el-table-column label="作者" width="95" align="center">
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
  name: 'ExportZip',
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.listLoading = true
      const { data } = await fetchList()
      this.list = data.items
      this.listLoading = false
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Zip').then(zip => {
        const tableHeader = ['ID', '标题', '作者', '阅读', '日期']
        const filterValues = ['id', '标题', '作者', '阅读', '日期']
        const list = this.list
        const data = this.formatJson(filterValues, list)
        zip.export_txt_to_zip(tableHeader, data, this.filename, this.filename)
        this.downloadLoading = false
      })
    },
    formatJson(filterValues, jsonData) {
      return jsonData.map(v => filterValues.map(j => v[j]))
    }
  }
}
</script>
