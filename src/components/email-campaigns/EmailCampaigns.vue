<template>
  <CommonInput v-model="searchText" placeholder="Search Campaigns" />
  <CampaignTable :searchText="searchText" />
</template>

<script lang="ts" setup>
import CampaignTable from '@/components/email-campaigns/CampaignTable.vue'
import CommonInput from '@/components/common/CommonInput.vue'
import { ref } from 'vue'

const searchText = ref('')
</script>
