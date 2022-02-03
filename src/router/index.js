import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/AuthTemplate.vue'),
    children: [
      {
        path: '',
        name: 'auth',
        component: () => import('@/views/auth/Auth.vue')
      },
      {
        path: 'recuperar-senha',
        name: 'forget.password',
        component: () => import('@/views/auth/ForgetPassword.vue')
      },
    ]
  },
  {
    path: '/campus',
    component: () => import('@/layouts/DefaultTemplate.vue'),
    children: [
      {
        path: '',
        name: 'campus.home',
        component: () => import('@/views/home/Home.vue')
      },
      {
        path: 'minhas-duvidas',
        name: 'campus.my.supports',
        component: () => import('@/views/supports/MySupports.vue')
      },
      {
        path: 'modulos',
        name: 'campus.modules',
        component: () => import('@/views/modules/ModulesAndLessons.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
