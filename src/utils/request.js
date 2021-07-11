import axios from "axios";
let request = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 3000
})
request.interceptors.request.use(config => {
  config.headers.token = '123456'
  return config
}, error => {
  return Promise.reject(error)
})
request.interceptors.response.use(response => {
  if(response.status === 200) {
    return Promise.resolve(response.data)
  }else {
    return Promise.reject(response)
  }
},error => {
  return Promise.reject(error)
})
export default request
