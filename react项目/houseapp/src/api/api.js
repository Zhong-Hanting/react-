import axios from "axios"
import qs from "qs"

// export    let ip="http://172.16.14.195:80"  //教室
// export    let ip="http://192.168.43.117:80"  //手机
export    let ip="http://192.168.31.71:80"      //家用
 const  $$qs=axios.create({
       
        baseURL:ip,
        timeout:8000
})
export function login(acc,pwd){   //登录
    return $$qs.post("/login.php",qs.stringify({acc,pwd}))
}

export function code(){   //验证码
    return $$qs.get("/valitecode.php",)
}
export function reg(acc,pwd){   //注册
    return $$qs.post("/reg.php",qs.stringify({acc,pwd}))
}
export function like(){   //猜你喜欢
    return $$qs.get("/gethouselist.php",)
}