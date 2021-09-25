import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    // 常用编码传唤
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // 图片Base64编码
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // 中文乱码转换
    path: '/randomcode',
    name: 'RandomCode',
    component: () => import('../views/RandomCode.vue')
  },
  {
    // 日期时间戳转换
    path: '/timestamp',
    name: 'Timestamp',
    component: () => import('../views/Timestamp.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
