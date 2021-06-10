import Vue from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css' // CSS重置的现代替代方案
import Element from 'element-ui'
import './styles/element-variables.scss'
import enLang from 'element-ui/lib/locale/lang/en' // 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖
import '@/styles/index.scss' // 全局样式
import App from './App'
import store from './store'
import router from './router'
import './icons' // 图标
import './permission' // 权限控制
import './utils/error-log' // 错误日志
import * as filters from './filters' // 全局过滤器

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // 设置element-ui默认尺寸
  locale: enLang // 如果使用中文，无需设置，请删除
})

// 注册全局实用程序过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
