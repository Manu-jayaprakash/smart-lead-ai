<template>
  <el-button
    class="common-button"
    :class="{
      'common-button--disabled': isDisabled,
      'common-button--active': !isDisabled
    }"
    :disabled="isDisabled"
  >
    {{ label }}
  </el-button>
</template>

<script lang="ts" setup>
type Props = {
  label: string
  isDisabled?: boolean
}

withDefaults(defineProps<Props>(), {
  isDisabled: false
})
</script>

<style lang="scss" scoped>
.common-button {
  height: 2.5rem;
}
.common-button--disabled {
  background-color: #edeef8;
  &.is-disabled:hover {
    background-color: #edeef8;
  }
}
.common-button--active {
  background-color: $primary;
  color: #fff;
}
</style>
