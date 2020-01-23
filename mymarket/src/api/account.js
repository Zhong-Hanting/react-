


import $$http from "@/utils/request.js";

// 引入qs模块
import qs from "qs";



// 列表查询
export const list=()=>{
    return $$http
        .get("/account/list")
        .then(({data})=>{
            return data  //可以免去获取到后端返回数据的外面的那一层data
        })
}
// es5写法
// export function list(data){
//     return $$http.get("/account/list",{
//         params:data
//     })
// }





// 账号编辑
export  const edit=data=>{
    return $$http.post("/account/edit",qs.stringify(data)).then(data=>data.data)
}

// 删除
export function del(data){
    return $$http.get("/account/del",{
        params:data
    }).then(data=>data.data)
}


// 账号添加
export function add(data){
    return $$http.post("/account/add",qs.stringify(data)).then(data=>data.data)
    
}

// 加qs.stringify是为了 过滤  把这个数据过滤成 后台只需要的数据
// 账号信息搜索
export function search(data){
    return $$http.post("/account/search",qs.stringify(data)).then(data=>data.data)
}


// 商品类型列表
export function typelist(data){
    return $$http.get("/productType/list",{params:data}).then(data=>data.data)}

    // 商品分类编辑
    export function shopchange(data) {
        return $$http.post('productType/edit',qs.stringify(data)).then(data=>data.data)
    }
    // 商品分类列表删除
    export function typedel(data){
        return $$http.get("/productType/del",{params:data}).then(data=>data.data)
    }
    // 商品分类列表增加
    export function typeadd(data){
        return $$http.post("/productType/add",qs.stringify(data)).then(data=>data.data)
    }
    // 商品分类查询
    export function typesearch(name){
        return $$http.post("/productType/search",qs.stringify(name)).then(data=>data.data)
    }

    
    // 商品列表
    export function productlist(data){
        return $$http.get("/product/list",{params:data}).then(data=>data.data)
    }
    // 商品列表添加
    export function shopadd(data){
        return $$http.post("/product/add",qs.stringify(data)).then(data=>data.data)
    }
    // 商品编辑
    export function productedit(data){
        return $$http.post("/product/edit",qs.stringify(data)).then(data=>data.data)
    }
    // 商品列表删除
    export function productdel(id){
        return $$http.get("/product/del",{
            params:{id:id}
        }).then(data=>data.data)
    }
    

    // 登录
    export function login(data){
        return $$http.post("/login",qs.stringify(data)).then(data=>data.data)
    }
        // 注销
    export function out(data){
        return $$http.post("/logout",qs.stringify(data)).then(data=>data.data)
    }
    // 获取角色
    export const userrole=()=>{
      const token=localStorage.getItem("token")
        return $$http.post("/getCurrentUserRole",qs.stringify({token})).then(data=>data.data)
    }
    
