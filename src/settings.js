module.exports = {
  title: 'vue后台管理系统',

  /**
   * @type {boolean} true | false
   * @description 是否显示设置 right-panel
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description 是否使用 tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description 是否固定头部
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description 是否在侧边栏中显示徽标
   */
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description 需要显示错误日志组件
   * 默认值仅在生产环境中使用
   * 如果您还想在dev中使用它，可以传递['production'，'development']
   */
  errorLog: 'production'
}
