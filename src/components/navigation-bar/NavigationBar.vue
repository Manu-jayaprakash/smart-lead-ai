<template>
  <div class="navigation-bar flex align-center">
    <div class="navigation-bar__logo">
      <img src="/src/assets/images/logo.svg" alt="logo" />
    </div>

    <div class="navigation-bar__actions flex mr-lg" v-if="store.isUserLoggedIn">
      <img src="/src/assets/images/question.svg" alt="question" class="cursor-pointer" />
      <img src="/src/assets/images/gifts.svg" alt="gift" class="cursor-pointer" />

      <NavigationBarMenu />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/useAuthStore'
import NavigationBarMenu from '@/components/navigation-bar/NavigationBarMenu.vue'

const store = useAuthStore()
</script>

<style lang="scss" scoped>
.navigation-bar__logo {
  margin: 1.125rem auto 1.125rem 1.5rem;
  cursor: pointer;
}

.navigation-bar {
  background-color: #00056a;
}
.navigation-bar__actions {
  column-gap: 1.25rem;
}
</style>
