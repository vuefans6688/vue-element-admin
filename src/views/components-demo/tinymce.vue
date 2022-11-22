<template>
  <div class="components-container">
    <aside>
      富文本是管理后端的一个核心特性，但同时它也是一个有很多坑的地方。在选富文本的过程中，我也走了很多弯路。市面上常见的富文本基本都用上了，我最终选择了Tinymce。请参阅更详细的富文本比较和介绍。
      <a target="_blank" class="link-type" href="https://panjiachen.github.io/vue-element-admin-site/feature/component/rich-editor.html">
        文档
      </a>
    </aside>
    <div>
      <tinymce v-model="content" :height="300" />
    </div>
    <div class="editor-content" v-html="content" />
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  data() {
    return {
      content:
        `
        <h1 style="text-align: center;">欢迎来到TinyMCE演示!</h1>
        <p style="text-align: center; font-size: 15px;">
          <img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" />
          <ul>
            <li>我们的<a href="//www.tinymce.com/docs/">文档</a>是学习如何配置tinyme的一个很好的资源。</li>
            <li>有具体问题吗？访问<a href="https://community.tinymce.com/forum/">社区论坛</a>.</li>
            <li>我们还提供企业级支持，作为<a href="https://tinymce.com/pricing">TinyMCE高级订阅</a>.</li>
          </ul>
        </p>
        `
    }
  }
}
</script>

<style scoped>
.editor-content {
  margin-top: 20px;
}
</style>

