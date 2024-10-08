<template>
  <NavigationBar />

  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/common/NavigationBar.vue'
</script>
