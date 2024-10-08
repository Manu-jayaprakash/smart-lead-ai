<template>
  <div>
    <div v-if="label" class="common-input__label">
      {{ label }}
    </div>

    <el-input v-model="model" :placeholder="placeholder" />
  </div>
</template>
<script lang="ts" setup>
type Props = {
  label?: string
  placeholder?: string
}

defineProps<Props>()

const model = defineModel<string>({
  required: true
})
</script>

<style lang="scss" scoped>
.common-input__label {
  line-height: 1.5rem;
  color: #7a7d9c;
}
</style>
