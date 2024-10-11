<template>
  <FormCard class="login-page">
    <h2 class="login-page-heading text-center">Welcome to Smartlead.ai</h2>

    <p class="text-center">Log in to your account</p>

    <div class="mt-lg">
      <span class="login-page__form-label">Email</span>
      <CommonInput v-model="email" placeholder="enter email" inputType="email" />
    </div>

    <div class="mt-md">
      <div class="flex">
        <span class="login-page__form-label">Password</span>
        <span class="login-page__form-forgot-password-label ml-auto">Forgot Password?</span>
      </div>
      <CommonInput v-model="password" placeholder="enter password" inputType="password" />

      <CommonButton
        label="Sign in"
        class="mt-lg width-100"
        :is-disabled="!email || !password"
        @click="handleLoginSubmit"
      />
    </div>
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
.login-page__form-label {
  line-height: 1.5rem;
  color: #7a7d9c;
}
.login-page__form-forgot-password-label {
  color: $primary;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
}
</style>
