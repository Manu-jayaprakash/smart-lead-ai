<template>
  <div class="email-campaigns">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="All Campaigns (24)" name="campaigns" class="ml-md mr-md">
        <CampaignTable :searchText="searchText" />
      </el-tab-pane>
    </el-tabs>

    <div class="email-campaigns__header-actions flex">
      <CommonInput v-model="searchText" placeholder="Search Campaigns" />
      <CommonButton label="+ Add Campaign" class="email-campaigns__header-actions-cta ml-lg" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CampaignTable from '@/components/email-campaigns/CampaignTable.vue'
import CommonInput from '@/components/common/CommonInput.vue'
import CommonButton from '@/components/common/CommonButton.vue'
import { ref } from 'vue'

const searchText = ref('')
const activeName = ref('campaigns')
</script>
<style lang="scss" scoped>
.email-campaigns {
  position: relative;
}
.email-campaigns__header-actions {
  padding: 12px 0;
  position: absolute;
  top: 0;
  right: 1.25rem;
}
.email-campaigns :deep(.el-tabs__header) {
  min-height: 3.75rem;
  background-color: #fff;
  padding-left: 1.25rem;
  .el-tabs__nav-wrap::after {
    display: none;
  }
}
.email-campaigns :deep(.el-tabs__item.is-active) {
  color: #282b42;
  font-weight: 500;
}
.email-campaigns__header-actions-cta {
  height: 32px;
}
</style>
