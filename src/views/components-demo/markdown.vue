<template>
  <div class="components-container">
    <aside>
      Markdown是基于
      <a href="https://github.com/nhnent/tui.editor" target="_blank">tui.editor</a>
      ，用Vue简单包装。
      <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/feature/component/markdown-editor.html">
        文档
      </a>
    </aside>
    <div class="editor-container">
      <el-tag class="tag-title">基本: </el-tag>
      <markdown-editor v-model="content1" height="300px" />
    </div>
    <div class="editor-container">
      <el-tag class="tag-title">Markdown模式: </el-tag>
      <markdown-editor ref="markdownEditor" v-model="content2" height="200px"
        :options="{ hideModeSwitch: true, previewStyle: 'tab' }" />
    </div>
    <div class="editor-container">
      <el-tag class="tag-title">自定义工具栏: </el-tag>
      <markdown-editor v-model="content3" :options="{ toolbarItems: ['heading', 'bold', 'italic'] }" />
    </div>
    <div class="editor-container">
      <el-tag class="tag-title">I18n: </el-tag>
      <el-alert
        :closable="false"
        title="您可以更改管理系统的语言以查看效果"
        type="success"
      />
      <markdown-editor
        ref="markdownEditor"
        v-model="content4"
        :language="language"
        height="300px"
      />
    </div>
    <el-button
      style="margin-top: 80px"
      type="primary"
      icon="el-icon-document"
      @click="getHtml"
    >
      获取HTML
    </el-button>
    <div v-html="html"></div>
  </div>
</template>

<script>
import MarkdownEditor from '@/components/MarkdownEditor'
const content = `
**This is test**

* vue
* element
* webpack

`
export default {
  name: 'MarkdownDemo',
  components: { MarkdownEditor },
  data() {
    return {
      content1: content,
      content2: content,
      content3: content,
      content4: content,
      html: '',
      languageTypeList: {
        'en': 'en_US',
        'zh': 'zh_CN',
        'es': 'es_ES'
      }
    }
  },
  computed: {
    language() {
      return this.languageTypeList['en']
    }
  },
  methods: {
    getHtml() {
      this.html = this.$refs.markdownEditor.getHtml()
    }
  }
}
</script>

<style scoped>
.editor-container {
  margin-bottom: 30px;
}
.tag-title {
  margin-bottom: 5px;
}
</style>
