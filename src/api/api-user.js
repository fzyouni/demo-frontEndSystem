import API from './api-config'

export default {
  // 用户登录
  userLogin: params => API.post('/sys/userLogin', params)
}
