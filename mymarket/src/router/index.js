import Vue from 'vue'
import VueRouter from 'vue-router'
import login from   "../views/login"

import b from   "../views/二级路由/typelist.vue"
import c from   "../views/二级路由/typeadd.vue"
import d from   "../views/二级路由/productlist.vue"
import e from   "../views/二级路由/productadd.vue"
import f from   "../views/二级路由/accountlist.vue"
import g from   "../views/二级路由/accountadd.vue"
import h from   "../views/二级路由/passwordchange.vue"

// 注册全局插件
Vue.use(VueRouter)

const routes = [{

  //   一个相对地址对应一个子组件   
    path: '/',
    redirect: "/login"
  },
  {
    path: "/login",
    component: login
  },

  {
    path: '/home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue'),
    meta:{
      requireAuth:true    //这是需要验证的
    },
    children:[    //都是首页的二级路由 要嵌套 所以要写在children里面
      {
        path:"/dashboard",
        component:()=>import("../views/二级路由/dashboard.vue"),   //是懒加载
        meta:{
          requireAuth:true    //这是需要验证的   
        },
      },
      {
        path:"typelist",
        component:b,
        meta:{
          requireAuth:true    //这是需要验证的
        },
      },
      {
        path:"typeadd",
        component:c,
        meta:{
          requireAuth:true    //这是需要验证的
        },
      },
      {
        path:"productlist",
        component:d,
        meta:{
          requireAuth:true    //这是需要验证的
        },
      },
      {
        path:"productadd",
        component:e,
        meta:{
          requireAuth:true    //这是需要验证的
        },
      },
      {
        path:"accountlist",
        component:f,
        meta:{
          requireAuth:true    //这是需要验证的
        },
      },
      {
        path:"accountadd",
        component:g,
        meta:{
          requireAuth:true    //这是需要验证的
        },
      },
      {
        path:"passwordchange",
        component:h,
        meta:{
          requireAuth:true    //这是需要验证的
        },
      },
      {
        path:"sta",
        component:()=>import("../views/二级路由/sta.vue"),    //是懒加载
        meta:{
          requireAuth:true    //这是需要验证的
        },
      },
      {
        path:"stocksta",
        component:()=>import("../views/二级路由/stocksta.vue"),    //是懒加载
        meta:{
          requireAuth:true    //这是需要验证的
        },
      },
      {
        path:"menulist",
        component:()=>import("../views/二级路由/menulist.vue") ,   //是懒加载
        meta:{
          requireAuth:true    //这是需要验证的
        },
      },
      {
        path:"menuadd",
        component:()=>import("../views/二级路由/menuadd.vue") ,   //是懒加载
        meta:{
          requireAuth:true    //这是需要验证的
        },
      },
     
    
    ]
  },
  {     //这是 在网页地址输错的情况下 默认跳到 首页
    path:"*",
    redirect:"/home"
  }
 
]

const router = new VueRouter({
  routes
})
// 配置路由前置守卫


   // 路由权限
    // to:是下一个
    // from是上一个
    // next（）  括号里面没东西就直接放走 
    // next()  括号里面有东西就直接拦截 跳到指定页面
    router.beforeEach((to,from,next)=>{ 
      if(to.meta.requireAuth){     
        const token = localStorage.getItem('token');   //获取存在本地里面的token码
      if(token){  
          // 如果okend码存在 就可以跳到登录后的页面
          next();
      }else{
          next("/login")
          // 如果没有取得token码  就只有继续在登录页面重新登录了
      }
      }else{
        next()
      }
  })

export default router