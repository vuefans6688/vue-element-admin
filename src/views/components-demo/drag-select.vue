<template>
  <div class="components-container">
    <el-drag-select
      v-model="value"
      style="width: 500px"
      multiple
      placeholder="请选择"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-drag-select>
    <div style="margin-top: 30px">
      <el-tag v-for="item of value" :key="item" style="margin-right: 15px">
        {{ item }}
      </el-tag>
    </div>
  </div>
</template>

<script>
import ElDragSelect from '@/components/DragSelect' // 基于element-ui
export default {
  name: 'DragSelectDemo',
  components: { ElDragSelect },
  data() {
    return {
      value: ['苹果', '香蕉', '桔子'],
      options: [{
        value: '苹果',
        label: '苹果'
      }, {
        value: '香蕉',
        label: '香蕉'
      }, {
        value: '桔子',
        label: '桔子'
      }, {
        value: '梨子',
        label: '梨子'
      }, {
        value: '草莓',
        label: '草莓'
      }]
    }
  }
}
</script>
