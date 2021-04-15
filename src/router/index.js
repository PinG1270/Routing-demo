import Vue from 'vue'
import VueRouter from 'vue-router'
import Error from '../views/404.vue';

Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    name:'404',
    component:Error
  },
  {
    path: '/',
    redirect:"/home"
  },
  {
    path:'/home',
    name:'Home',
    component:()=>import('../views/home/Home.vue'),
    
  },
  {
    path: '/login',
    name: 'Login',
    component:()=>import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component:()=>import('../views/Register.vue')
  },
  {
    path:'/search',
    name:'Search',
  },
  {
    path:'/detail/:goodId',
    name:"Detail",
    component:()=>import('../views/detail/Detail.vue')
  },
  {
    path:'/list/:type',
    name:'List',
    component:()=>import('../views/goodList/List.vue')
  },
  {
    path:'/shopcar',
    name:'ShopCar',
    component:()=>import('../views/shopCar/ShopCar.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  fallback: () => true
})

export default router
