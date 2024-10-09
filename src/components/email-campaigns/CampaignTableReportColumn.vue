<template>
  <div class="column campaign-table-report-column">
    <span>
      <span class="campaign-table-report-column__value">
        {{ value }}
      </span>

      <span v-if="secondaryValue" class="campaign-table-report-column__sub-value ml-xs">
        {{ secondaryValue }}
      </span>
    </span>

    <span class="">{{ label }}</span>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  value: number
  label: string
  valueColor?: string
  secondaryValue?: string
}>()
</script>

<style lang="scss" scoped>
.campaign-table-report-column {
  color: #282b42;
  opacity: 0.6;
}
.campaign-table-report-column__value {
  color: v-bind(valueColor);
  font-size: 1.25rem;
  font-weight: 500;
}
.campaign-table-report-column__sub-value {
  font-size: 0.75rem;
}
</style>
