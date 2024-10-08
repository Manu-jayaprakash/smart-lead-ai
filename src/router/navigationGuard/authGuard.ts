import { useAuthStore } from '@/stores/useAuthStore'
import type { NavigationGuard } from 'vue-router'
import { RouteNames } from '@/router/constants/RouteNames'

// checks if users authenticated or not for protected routes
export const authGuard: NavigationGuard = async (to, from, next) => {
  const store = useAuthStore()

  // Check if the user is authenticated
  if (store.isUserLoggedIn) {
    next()
  } else {
    next({ name: RouteNames.LOGIN })
  }
}

// if already logged-in prevent visiting login page
export const loginGuard: NavigationGuard = async (to, from, next) => {
  const store = useAuthStore()

  // Check if the user is authenticated
  if (store.isUserLoggedIn) {
    next({ name: RouteNames.ALL_LEADS })
  } else {
    next()
  }
}
