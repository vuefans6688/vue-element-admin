<template>
  <div class="components-container">
    <el-button type="primary" @click="dialogTableVisible = true">
      打开一个拖拽对话框
    </el-button>
    <el-dialog
      v-el-drag-dialog
      :visible.sync="dialogTableVisible"
      title="送货地址"
      @dragDialog="handleDrag"
    >
      <el-select ref="select" v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-table :data="gridData">
        <el-table-column
          property="date"
          label="日期"
          width="150"
          align="center"
        />
        <el-table-column
          property="name"
          label="名字"
          width="200"
          align="center"
        />
        <el-table-column property="address" label="地址" align="center" />
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from '@/directive/el-drag-dialog' // 基于 element-ui
export default {
  name: 'DragDialogDemo',
  directives: { elDragDialog },
  data() {
    return {
      dialogTableVisible: false,
      options: [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' }
      ],
      value: '',
      gridData: [{
        date: '2016-05-02',
        name: '约翰史密斯',
        address: '金沙路普陀区1518号'
      }, {
        date: '2016-05-04',
        name: '约翰史密斯',
        address: '金沙路普陀区1518号'
      }, {
        date: '2016-05-01',
        name: '约翰史密斯',
        address: '金沙路普陀区1518号'
      }, {
        date: '2016-05-03',
        name: '约翰史密斯',
        address: '金沙路普陀区1518号'
      }]
    }
  },
  methods: {
    // v-el-drag-dialog onDrag 回调函数
    handleDrag() {
      this.$refs.select.blur()
    }
  }
}
</script>
