import { createApp } from 'vue'
import App from './App.vue'
import 'styles/index.scss'
import router from './router'
import store from './store'
import element3 from 'plugins/element3'
import MyUI from '../modules/MyUI'

const app = createApp(App)

// 注册，router，vuex，element3，MyUI，并将app实例挂载到页面
app.use(router)
app.use(store)
app.use(element3)
app.use(MyUI, {
  components: [
    'MyPagination'
  ]
})
app.mount('#app')