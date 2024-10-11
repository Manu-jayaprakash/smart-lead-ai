<template>
  <DashboardLayout>
    <template #dashboard-aside-menu>
      <DashboardAsideMenu />
    </template>

    <template #dashboard-page-view>
      <RouterView />
    </template>
  </DashboardLayout>
</template>
<script lang="ts" setup>
import DashboardLayout from '@/layout/DashboardLayout.vue'
import DashboardAsideMenu from '@/views/DashboardView/DashboardAsideMenu.vue'
</script>
