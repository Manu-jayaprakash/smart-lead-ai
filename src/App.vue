<template>
  <NavigationBar />

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/common/NavigationBar.vue'
import { useAuthStore } from './stores/useAuthStore'

const { setUserEmail } = useAuthStore()

const init = () => {
  // checks if user session active or not to have persistent login
  const userEmail = localStorage.getItem('email')
  if (userEmail) {
    void setUserEmail(userEmail)
  }
}

void init()
</script>
