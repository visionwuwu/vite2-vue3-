import Pagination from './MyPagination/index.vue'

// 按需注册单个组件对象
export const MyPagination = {}

// 按需注册全局组件
MyPagination.install = Vue => Vue.component(Pagination.name, Pagination)

// 完整UI库注册全局组件对象
const MyUI = {}

// 存放UI组件对象
const COMPONENTS = {
  Pagination
}

// 调用install方法全局注册我们的UI组件
MyUI.install = function (Vue, options) {
  // 传入配置项，按需注册组件
  if (options && options.components) {
    const comps = options.components
    Object.keys(COMPONENTS).forEach(key => {
      const component = COMPONENTS[key]
      if (comps.includes(component.name)) {
        Vue.component(component.name, component)
      }
    })
    return
  }

  // 完整注册组件
  Object.keys(COMPONENTS).forEach(name => {
    const component = COMPONENTS[name]
    Vue.component(component.name, component)
  })
}

export default MyUI
