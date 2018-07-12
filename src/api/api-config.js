import axios from 'axios'

// 请求后台默认url
axios.defaults.baseURL = 'http://127.0.0.1:8888/'

// 请求头信息
axios.defaults.headers = {
  'Content-Type': 'application/json;charset=utf-8',
  'Access-Control-Allow-Methods': 'GET, POST',
  'Access-Control-Allow-Origin': '*'
}
// 输出axios
export default axios
