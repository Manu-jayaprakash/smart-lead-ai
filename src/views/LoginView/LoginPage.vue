<template>
  <FormCard class="login-page">
    <h2 class="login-page-heading">Welcome to Smartlead.ai</h2>

    <p>Log in to your account</p>

    <CommonInput v-model="email" label="Email" placeholder="enter email" class="mb-md mt-lg" />

    <CommonInput v-model="password" label="Password" placeholder="enter password" />

    <CommonButton
      label="Sign in"
      class="mt-lg width-100"
      is-disabled
      @click="$router.push({ name: RouteNames.ALL_LEADS })"
    />
  </FormCard>
</template>

<script lang="ts" setup>
import { RouteNames } from '@/router/constants/RouteNames'
import FormCard from '@/components/common/FormCard.vue'
import CommonButton from '@/components/common/CommonButton.vue'
import CommonInput from '@/components/common/CommonInput.vue'

import { ref } from 'vue'
const email = ref('')
const password = ref('')
</script>

<style lang="scss" scoped>
.login-page-heading {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.login-page {
  margin: 4rem auto 0 auto;
}
</style>
