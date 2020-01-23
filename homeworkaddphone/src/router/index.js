import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import fight from '../views/fight/fight'



Vue.use(VueRouter)

const routes = [
  {
    path:"/home",
    component:Home,
  },
  {
  path:"/fight",
  component:fight,    //发牌页面
  },
  {
      path:"/evaluate",
      component:()=>import("../views/phoneApp/evaluate.vue")
  },
  {
    path:"/shops",
    component:()=>import("../views/phoneApp/shops.vue")
  },
  {
    path:"/goods",
    component:()=>import("../views/phoneApp/goods.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
