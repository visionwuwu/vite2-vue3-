import axios from 'axios'
import { Message, Msgbox } from 'element3'
import { useStore } from 'vuex'
const store = useStore()

const service = axios.create({
  // 请求接口的基础地址
  baseURL: import.meta.env.VITE_BASE_API,
  // 5000ms内，未处理作为超时
  timeout: 5000
})


service.interceptors.request.use((config) => {
  // 携带请求的令牌token
  // if (store.getters.token) {
  //   config.headers['X-Token'] = store.getters.token;
  // }
  config.headers['X-TOKEN'] = 'Beeare Token'
  return config
}, (error) => {
  return Promise.reject(error)
})


service.interceptors.response.use((response) => {
  const res = response.data
  /**
   * 通过判断状态码，统一处理响应，根据情况修改
   * 同时也可以通过HTTP状态码判断请求结果
   */
  if (res.code !== 20000) {
    Message.error({
      message: res.message || 'Error',
      duration: 5 * 1000
    })

    // 50008：非法token; 50012：其他客户端已登录 50014：令牌过期
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      Msgbox.confirm('您已登出，请重新登录', '确认', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      })
    }
  } else {
    return res
  }
}, (error) => {
  console.log('err' + error);
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service
