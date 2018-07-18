import axios from 'axios'
import qs from 'qs'
// 因为使用了代理 所以这里一定要配置 不然代理识别不了
axios.defaults.baseURL = '/api'
// 模拟请求头信息
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  'Access-Control-Allow-Methods': 'GET, POST',
  'Access-Control-Allow-Origin': '*'
}
// axios  响应拦截器
axios.interceptors.response.use(response => { return response }, error => {
  if (error.response) {
    console.log('请求错误')
    console.log(error.response.status)
  }
  return Promise.reject(error)// 返回接口返回的错误信息
})
// 超时
axios.defaults.timeout = 10000

let base = '' // 使用代理解决跨域问题

// 通用方法
export default {
  post: (url, params) => {
    return axios.post(`${base}${url}`, qs.stringify(params)).then(res => res.data)
  },
  get: (url, params) => {
    return axios.get(`${base}${url}`, {params: params}).then(res => res.data)
  },
  put: (url, params) => {
    return axios.put(`${base}${url}`, qs.stringify(params)).then(res => res.data)
  },
  delete: (url, params) => {
    return axios.delete(`${base}${url}`, {params: params}).then(res => res.data)
  },
  patch: (url, params) => {
    return axios.patch(`${base}${url}`, qs.stringify(params)).then(res => res.data)
  }
}
