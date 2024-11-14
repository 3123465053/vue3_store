import axios from "axios";

//创建实例
const httpInstance =axios.create({
  baseURL:"http://pcapi-xiaotuxian-front-devtest.itheima.net/",
  timeout:5000
})

//拦截器
//请求拦截
httpInstance.interceptors.request.use(config=>{
  return config
},e=>Promise.reject(e))
//响应拦截
httpInstance.interceptors.response.use(res=>res.data,e=>{
  return Promise.reject(e)
})

export default httpInstance
