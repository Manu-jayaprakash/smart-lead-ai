<template>
  <el-input
    v-model="model"
    :placeholder="placeholder"
    :type="inputType"
    :show-password="inputType === 'password'"
  >
    <template #prefix>
      <slot name="prefix" />
    </template>
  </el-input>
</template>
<script lang="ts" setup>
type Props = {
  placeholder?: string
  inputType?: string
}

defineProps<Props>()

const model = defineModel<string>({
  required: true
})
</script>
