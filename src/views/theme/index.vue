<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header">
        <a
          class="link-type link-title"
          target="_blank"
          href="https://panjiachen.github.io/vue-element-admin-site/guide/advanced/theme.html"
        >
          主题文档
        </a>
      </div>
      <div class="box-item">
        <span class="field-label">改变主题: </span>
        <el-switch v-model="theme" />
        <aside style="margin-top: 15px">
          提示：它不同于在导航栏上选择的主题是两个
          不同的蒙皮方法，每种方法都有不同的应用场景。
          有关详细信息，请参阅文档。
        </aside>
      </div>
    </el-card>
    <div class="block">
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>
    <div class="block">
      <el-button type="primary" icon="el-icon-edit" />
      <el-button type="primary" icon="el-icon-share" />
      <el-button type="primary" icon="el-icon-delete" />
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary">
        上传
        <i class="el-icon-upload el-icon-right" />
      </el-button>
    </div>
    <div class="block">
      <el-tag
        v-for="tag in tags"
        :key="tag.type"
        :type="tag.type"
        class="tag-item"
      >
        {{ tag.name }}
      </el-tag>
    </div>
    <div class="block">
      <el-radio-group v-model="radio">
        <el-radio :label="3">选项A</el-radio>
        <el-radio :label="6">选项B</el-radio>
        <el-radio :label="9">选项C</el-radio>
      </el-radio-group>
    </div>
    <div class="block">
      <el-slider v-model="slideValue" />
    </div>
  </div>
</template>

<script>
import { toggleClass } from '@/utils'
import '@/assets/custom-theme/index.css' // the theme changed version element-ui css
export default {
  name: 'Theme',
  data() {
    return {
      theme: false,
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'info' },
        { name: '标签三', type: 'success' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ],
      slideValue: 50,
      radio: 3
    }
  },
  watch: {
    theme() {
      toggleClass(document.body, 'custom-theme')
    }
  }
}
</script>

<style scoped>
.field-label {
  vertical-align: middle;
}
.box-card {
  width: 400px;
  max-width: 100%;
  margin: 20px auto;
}

.block {
  padding: 30px 24px;
}

.tag-item {
  margin-right: 15px;
}
</style>
