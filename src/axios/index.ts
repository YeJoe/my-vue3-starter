import Request from './request'
const request: Request = new Request({
  // 公共前缀
  // baseURL: 'http://127.0.0.1:3000/', //需要跨域的话就写自己搞的跨域
  // 请求头
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    token: '',
  },
  // 请求超时时间
  timeout: 8000,
})
export default request
