import axios from 'axios'
import qs from 'qs'

// 请求后台默认url
axios.defaults.baseURL = 'http://127.0.0.1:8888/'

// 模拟请求头信息
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  'Access-Control-Allow-Methods': 'GET, POST',
  'Access-Control-Allow-Origin': '*'
}
// axios  响应拦截器
axios.interceptors.response.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

export const userLogin = params => { return axios.post(`sys/userLogin`, qs.stringify(params)).then(res => res.data) }
