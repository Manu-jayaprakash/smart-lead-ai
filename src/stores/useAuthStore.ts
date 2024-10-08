import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const userEmail = ref('')

  const isUserLoggedIn = computed(() => !!userEmail.value)

  const setUserEmail = (value: string) => {
    userEmail.value = value
  }

  return {
    userEmail,
    isUserLoggedIn,
    setUserEmail
  }
})
