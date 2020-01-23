// 引入axios模块
import axios from "axios";

// 创建xioas实例
// const axiosInstance=axios.create({
//         baseURL:"http://172.16.14.195:666"
//     // 配置项的值     定义axios的全局请求地址  改的话 就改这里
// })




// 创建xioas实例 回家的ip
const axiosInstance=axios.create({
    baseURL:"http://192.168.31.71:666"
// 配置项的值     定义axios的全局请求地址  改的话 就改这里
})

//导出 axiosInstance
export default axiosInstance;