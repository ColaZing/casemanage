////////////////////axios的二次封装
import axios from 'axios'
////引入进度条
import nprogress from 'nprogress'
////引入进度条的样式
import 'nprogress/nprogress.css'
//限制最大并发请求数量
import { Scheduler } from '../utils/scheduler'
import { maxConcurrent } from '../config/baseConfig'
const scheduler = new Scheduler(maxConcurrent)
const req = axios.create({
    baseURL:"/api",
    timeout:20000,
    //headers : {'Content-Type': 'application/json'} //json格式
    //headers : {'Content-Type': 'application/x-www-form-urlencoded'} //普通表单键值对
    //headers : {'Content-Type': 'multipart/form-data'} //表单键值对和文件
})
////请求拦截器
req.interceptors.request.use((config)=>{
    //进度条开始
    nprogress.start()
    //表单格式post请求体
    //默认为form表单传输，排除个别采用formdata或json格式的请求
    if(config.data?.sendByJson){
        config.headers = {'Content-Type': 'application/json'}
        delete config.data.sendByJson
        config.data = JSON.stringify(config.data)
    }else if(config.data && !(config.data instanceof FormData)){
        let newData = ""
        for (const item in config.data){
            newData += `${item}=${config.data[item]}&`
        }
        newData = newData.substring(0,newData.length - 1)
        config.data = newData
    }
    return config
})
////响应拦截器
req.interceptors.response.use((res)=>{
    ///进度条结束
    nprogress.done()
    console.log("requests");
    return res.data
},(error)=>{
    return Promise.reject(new Error(error))
})

const requests = params => scheduler.add(() => req(params))

export default requests