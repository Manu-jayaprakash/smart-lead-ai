<template>
  <span class="campaing-tablestatus-dot"></span>
</template>

<script lang="ts" setup>
defineProps<{
  color: string
}>()
</script>

<style lang="scss" scoped>
.campaing-tablestatus-dot {
  height: 6px;
  width: 6px;
  background-color: v-bind(color);
  border-radius: 50%;
  display: inline-block;
  opacity: 1;
}
</style>
