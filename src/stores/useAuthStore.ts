import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  const userEmail = ref('')
  const isRoiAnnouncemnetViewed = ref(false)

  const isUserLoggedIn = computed(() => !!userEmail.value)
  const isRoiAnnouncementVisible = computed(
    () => isUserLoggedIn.value && !isRoiAnnouncemnetViewed.value
  )

  const setUserEmail = (value: string) => {
    userEmail.value = value
  }

  const setRoiAnnouncemnetViewed = (value: boolean) => {
    isRoiAnnouncemnetViewed.value = value
  }

  return {
    userEmail,
    isUserLoggedIn,
    isRoiAnnouncementVisible,
    setUserEmail,
    setRoiAnnouncemnetViewed
  }
})
