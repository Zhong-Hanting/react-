import axios from "axios";

 const $$axios=axios.create({
    baseURL: 'http://192.168.43.117:3000',  //手机查看
    // baseURL: 'http://169.254.79.251:3000',  //孤儿网段
    // baseURL: 'http://192.168.31.71:3000',     //家用
    // baseURL: 'http://172.16.14.195:3000',    //配置服务器IP+端口
    timeout: 10000   })//请求超时 

    export const  seller=()=>{
        return $$axios.get('/api/seller')
    }
    export const  goods=()=>{
        return $$axios.get('/api/goods')
    }
    export const  ratings=()=>{
        return $$axios.get('/api/ratings')
    }