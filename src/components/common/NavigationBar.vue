<template>
  <el-menu
    mode="horizontal"
    background-color="#00056A"
    text-color="#fff"
    active-text-color="#fff"
    :ellipsis="false"
  >
    <div class="navigation-bar__logo">
      <img src="/src/assets/images/logo.svg" alt="logo" />
    </div>
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-menu-item index="2">Info</el-menu-item>
    <el-menu-item index="3" @click="handleLogout">Logout</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/useAuthStore'
import { useRouter } from 'vue-router'
import { RouteNames } from '@/router/constants/RouteNames'

const router = useRouter()

const { setUserEmail, setRoiAnnouncemnetViewed } = useAuthStore()

const handleLogout = () => {
  void setUserEmail('')
  void setRoiAnnouncemnetViewed(false)
  localStorage.removeItem('email')
  localStorage.removeItem('is_roi_announcemnet_viewed')
  router.push({ name: RouteNames.LOGIN })
}
</script>

<style lang="scss" scoped>
.navigation-bar__logo {
  margin: 1.125rem auto 1.125rem 1.5rem;
  margin-right: auto;
  cursor: pointer;
  color: white;
}
.el-menu--horizontal {
  --el-menu-horizontal-height: 80px;
}
</style>
