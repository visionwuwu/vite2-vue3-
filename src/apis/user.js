import request from 'utils/request'

/**
 * 请求用户列表数据
 * @param {*} params 
 */
export function reqUserList(params) {
  return request({
    url: '/getUsers',
    params
  })
}

/**
 * 根据id获取用户
 * @param {*} id 
 */
export function reqUserById(params) {
  return request({
    url: '/getUser',
    params
  })
}

/**
 * 根据id删除用户
 * @param {*} params 
 */
export function delUserById(params) {
  return request({
    url: '/delUser',
    params
  })
}

/**
 * 根据id更新用户
 * @param {*} params 
 */
export function updateUserById(params) {
  return request({
    url: '/updateUser',
    params
  })
}

/**
 * 创建用户
 */
export function createUser(params) {
  return request({
    url: '/createUser',
    params
  })
}