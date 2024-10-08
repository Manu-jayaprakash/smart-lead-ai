<template>
  <RoiAnnouncement v-if="authStore.isRoiAnnouncementVisible" />
  <NavigationBar />

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/common/NavigationBar.vue'
import { useAuthStore } from '@/stores/useAuthStore'
import RoiAnnouncement from '@/components/roi-announcement/RoiAnnouncement.vue'

const { setUserEmail, setRoiAnnouncemnetViewed } = useAuthStore()
const authStore = useAuthStore()

const init = () => {
  // checks if user session active or not to have persistent login
  const userEmail = localStorage.getItem('email') ?? ''
  const roiAnnouncemnetStatus = localStorage.getItem('is_roi_announcemnet_viewed') ?? ''

  void setUserEmail(userEmail)
  void setRoiAnnouncemnetViewed(!!roiAnnouncemnetStatus)
}

void init()
</script>
