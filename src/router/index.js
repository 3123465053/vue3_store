import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'

//createRouter 创建路由实例
//createWebHistory 创建history模式路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //一级路由
   {
    path:'/',
    component:Layout,
    //二级路由
    children:[
      {
        path:'',
        component:Home
      },
      {
        path:"category",
        component:Category
      }
    ]
   },

   {
    path:'/login',
    component:Login
   }
  ],
})

export default router
