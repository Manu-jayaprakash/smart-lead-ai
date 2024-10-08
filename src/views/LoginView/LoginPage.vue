<template>
  <FormCard class="login-page">
    <h2 class="login-page-heading text-center">Welcome to Smartlead.ai</h2>

    <p class="text-center">Log in to your account</p>

    <CommonInput
      v-model="email"
      label="Email"
      placeholder="enter email"
      class="mb-md mt-lg"
      inputType="email"
    />

    <CommonInput
      v-model="password"
      label="Password"
      placeholder="enter password"
      inputType="password"
    />

    <CommonButton
      label="Sign in"
      class="mt-lg width-100"
      :is-disabled="!email || !password"
      @click="handleLoginSubmit"
    />
  </FormCard>
</template>

<script lang="ts" setup>
import FormCard from '@/components/common/FormCard.vue'
import CommonButton from '@/components/common/CommonButton.vue'
import CommonInput from '@/components/common/CommonInput.vue'
import useLoginPage from './composables/useLoginPage'

const { email, password, handleLoginSubmit } = useLoginPage()
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
