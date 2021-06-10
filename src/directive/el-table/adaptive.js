import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event'

/**
 * 如何使用
 * <el-table height="100px" v-el-height-adaptive-table="{bottomOffset: 30}">...</el-table>
 * el-table 必须设置高度
 * bottomOffset: 30(default)  // 表格从页面到底部的高度
 */

const doResize = (el, binding, vnode) => {
  const { componentInstance: $table } = vnode

  const { value } = binding

  if (!$table.height) {
    throw new Error(`el-$table 必须设置高度。例如 height='100px'`)
  }
  const bottomOffset = (value && value.bottomOffset) || 30

  if (!$table) return

  const height = window.innerHeight - el.getBoundingClientRect().top - bottomOffset
  $table.layout.setHeight(height)
  $table.doLayout()
}

export default {
  bind(el, binding, vnode) {
    el.resizeListener = () => {
      doResize(el, binding, vnode)
    }
    // 参数1必须是“Element”类型
    addResizeListener(window.document.body, el.resizeListener)
  },
  inserted(el, binding, vnode) {
    doResize(el, binding, vnode)
  },
  unbind(el) {
    removeResizeListener(window.document.body, el.resizeListener)
  }
}
