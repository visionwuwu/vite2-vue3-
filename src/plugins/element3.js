// // 全局引入element3
// import element3 from 'element3'
// // 全局引入element3的样式
// import 'element3/lib/theme-chalk/index.css'

import {
  ElButton,
  ElIcon,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElScrollbar,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElForm,
  ElFormItem,
  ElLoading,
  ElInput
} from 'element3'
import 'element3/lib/theme-chalk/base.css'
import 'element3/lib/theme-chalk/button.css'
import 'element3/lib/theme-chalk/icon.css'
import 'element3/lib/theme-chalk/dropdown.css'
import 'element3/lib/theme-chalk/dropdown-menu.css'
import 'element3/lib/theme-chalk/dropdown-item.css'
import 'element3/lib/theme-chalk/dropdown-item.css'
import 'element3/lib/theme-chalk/menu.css'
import 'element3/lib/theme-chalk/submenu.css'
import 'element3/lib/theme-chalk/menu-item.css'
import 'element3/lib/theme-chalk/breadcrumb.css'
import 'element3/lib/theme-chalk/breadcrumb-item.css'
import 'element3/lib/theme-chalk/message.css'
import 'element3/lib/theme-chalk/message-box.css'
import 'element3/lib/theme-chalk/scrollbar.css'
import 'element3/lib/theme-chalk/table.css'
import 'element3/lib/theme-chalk/table-column.css'
import 'element3/lib/theme-chalk/pagination.css'
import 'element3/lib/theme-chalk/form.css'
import 'element3/lib/theme-chalk/form-item.css'
import 'element3/lib/theme-chalk/loading.css'
import 'element3/lib/theme-chalk/input.css'

export default function (app) {
  // 完整
  // app.use(element3)

  app.use(ElButton)
  app.use(ElIcon)
  app.use(ElDropdown)
  app.use(ElDropdownMenu)
  app.use(ElDropdownItem)
  app.use(ElMenu)
  app.use(ElSubmenu)
  app.use(ElMenuItem)
  app.use(ElBreadcrumb)
  app.use(ElBreadcrumbItem)
  app.use(ElScrollbar)
  app.use(ElTable)
  app.use(ElTableColumn)
  app.use(ElPagination)
  app.use(ElForm)
  app.use(ElFormItem)
  app.use(ElLoading)
  app.use(ElInput)
}