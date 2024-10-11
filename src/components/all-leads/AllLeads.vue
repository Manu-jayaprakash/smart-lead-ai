<template>
  <div class="column text-center align-center justify-center height-100">
    <div class="all-leads__content">
      <h3 class="all-leads__content-header mb-sm">Get Free New Contacts and Leads</h3>

      Scrape verfied emails straight from LinkedIn using our Sales Navigator lead extractor.
      Download the extension and kick off!
    </div>

    <img src="/src/assets/images/all-leads.svg" alt="all-leads" class="all-leads__image mt-xl" />

    <CommonButton label="Add to Chrome" class="all-leads__cta mt-xl" />
  </div>
</template>

<script lang="ts" setup>
import CommonButton from '@/components/common/CommonButton.vue'
</script>
<style lang="scss" scoped>
.all-leads__image {
  width: 25.625rem;
  border-radius: 5px;
}
.all-leads__content {
  max-width: 28.3125rem;
  color: #000115cc;
}
.all-leads__content-header {
  font-size: 0.9375rem;
}
.all-leads__cta {
  width: 11.875rem;
  font-size: 0.9375rem;
}
</style>
