<template>
  <aside>
    keep-alive无法缓存创建和编辑页面，因为keep-alive的include当前不支持基于路由进行缓存，
    因此当前基于组件名称进行缓存。如果要实现类似的缓存。您可以使用浏览器缓存方案，例如localStorage或者
    不要使用keep-alive的include来缓存所有直接翻页。查看详细信息
    <a href="https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html" target="_blank">
      文档
    </a>
  </aside>
</template>

