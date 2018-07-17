/**
 *获取地址栏url参数方式
 * @param name
 * @returns {*}
 */
export function getQueryString (name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}

/**
 * 获取当前时间，格式为 hh:mm
 */
export function getNowTime () {
  let time = new Date()
  let hour = time.getHours() > 9 ? time.getHours() : '0' + time.getHours()
  let min = time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes()
  return hour + ':' + min
}
