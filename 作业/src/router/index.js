import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import fight from '../views/斗地主/fight'



Vue.use(VueRouter)

const routes = [
  {
    path:"/home",
    component:Home,
  },
  {
  path:"/fight",
  component:fight,
  }
]

const router = new VueRouter({
  routes
})

export default router
