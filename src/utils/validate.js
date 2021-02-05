/**
 * 判断是否为链接
 * @author Visionwuwu
 * @param {*} s 
 * @returns {boolean}
 */
export function isExternal (s) {
  return /^http[s]?/.test(s)
}