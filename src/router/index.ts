import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/views/DashboardView/DashboardPage.vue'
import LoginPage from '@/views/LoginView/LoginPage.vue'
import { RouteNames } from '@/router/constants/RouteNames'
import { authGuard, loginGuard } from './navigationGuard/authGuard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: LoginPage,
      name: RouteNames.LOGIN
    },
    {
      path: '/dashboard',
      component: DashboardPage,
      name: RouteNames.DASHBOARD,
      redirect: { name: RouteNames.ALL_LEADS },
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'all-leads',
          name: RouteNames.ALL_LEADS,
          component: () => import('@/components/all-leads/AllLeads.vue')
        },
        {
          path: 'master-inbox',
          name: RouteNames.MASTER_INBOX,
          component: () => import('@/components/all-leads/AllLeads.vue')
        },
        {
          path: 'email-campaigns',
          name: RouteNames.EMAIL_CAMPAIGNS,
          component: () => import('@/components/email-campaigns/EmailCampaigns.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === RouteNames.LOGIN) {
    loginGuard(to, from, next)
    return
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    authGuard(to, from, next)

    return
  }
  next()
})

export default router
