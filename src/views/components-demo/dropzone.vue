<template>
  <div class="components-container">
    <aside>
      基于
      <a class="link-type" href="https://github.com/rowanwins/vue-dropzone">
        dropzone </a>.
      因为我的业务有特殊的需求，需要上传图片到qiniu，所以我没有选择第三方，而是选择了自己封装。它非常简单，您可以在@/components/Dropzone中看到详细代码。
    </aside>
    <div class="editor-container">
      <dropzone
        id="my-vue-dropzone"
        url="https://httpbin.org/post"
        @dropzone-removedFile="dropzoneR"
        @dropzone-success="dropzoneS"
      />
    </div>
  </div>
</template>

<script>
import Dropzone from '@/components/Dropzone'
export default {
  name: 'DropzoneDemo',
  components: { Dropzone },
  methods: {
    dropzoneS(file) {
      this.$message({ message: '上传成功', type: 'success' })
    },
    dropzoneR(file) {
      this.$message({ message: '删除成功', type: 'success' })
    }
  }
}
</script>

