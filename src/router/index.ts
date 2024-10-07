import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout.vue'
import LoginPage from '@/views/LoginView/LoginPage.vue'
import { RouteNames } from '@/router/constants/RouteNames'

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
      component: DashboardLayout,
      redirect: { name: RouteNames.ALL_LEADS },
      children: [
        {
          path: 'all-leads',
          name: RouteNames.ALL_LEADS,
          component: () => import('@/components/AllLeads/AllLeads.vue')
        },
        {
          path: 'master-inbox',
          name: RouteNames.MASTER_INBOX,
          component: () => import('@/components/AllLeads/AllLeads.vue')
        },
        {
          path: 'email-campaigns',
          name: RouteNames.EMAIL_CAMPAIGNS,
          component: () => import('@/components/EmailCampaigns/EmailCampaigns.vue')
        }
      ]
    }
  ]
})

export default router
