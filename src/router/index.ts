import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 定义路由配置的类型
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/Page1.vue'),
  },
  {
    path: '/page2',
    component: () => import('../views/Page2.vue'),
  },
]

// 创建路由实例
const router = createRouter({
  // 使用 hash 模式
  history: createWebHashHistory(),
  routes,
})

export default router
