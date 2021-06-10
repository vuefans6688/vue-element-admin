<template>
  <aside>
    keep-alive无法缓存创建和编辑页面，因为keep-alive include当前不支持
    基于路由进行缓存，因此当前基于组件名称进行缓存。如果要实现类似的缓存
    因此，您可以使用浏览器缓存方案，例如localStorage。或者不要使用keep-alive
    include来缓存所有 直接翻页。查看详细信息
    <a
      href="https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html"
      target="_blank"
    >文档</a>
  </aside>
</template>

