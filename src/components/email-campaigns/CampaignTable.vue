<template>
  <el-table :data="filteredCampaigns" row-class-name="campaing-table__row">
    <el-table-column width="40" type="selection" />
    <!-- Campaign Details -->
    <el-table-column label="Campaign Details" width="360">
      <template #default="scope">
        <div class="campaing-table__row-campaign-details flex">
          <el-progress
            type="circle"
            :percentage="scope.row.percentage"
            class="campaign-table__progress"
            :width="50"
            :color="getStausColor(scope.row.status)"
          />
          <div>
            <div class="campaing-table__row-campaign-details-name flex align-center cursor-pointer">
              <div class="mr-sm">{{ scope.row.name }}</div>
              <el-icon><Link /></el-icon>
            </div>
            <div class="flex align-center">
              <CampaignTableStatusDot :color="getStausColor(scope.row.status)" class="mr-sm" />
              <span class="campaing-table__row-label">
                {{ scope.row.date_info }} | {{ scope.row.sequence }}
              </span>
            </div>
          </div>
        </div>
      </template>
    </el-table-column>

    <!-- Sent -->
    <el-table-column label="Report" :width="70">
      <template #default="scope">
        <CampaignTableReportColumn label="Sent" :value="scope.row.sent" valueColor="#6E58F1" />
      </template>
    </el-table-column>

    <!-- Click -->
    <el-table-column>
      <template #default="scope">
        <CampaignTableReportColumn
          label="Clicked"
          :value="scope.row.clicked"
          valueColor="#EEB728"
          :secondary-value="scope.row.click_percentage"
        >
          <template #label-icon v-if="scope.row.status === CampaignStatus.DRAFT">
            <el-icon class="ml-xs" color="#DD9553"><WarnTriangleFilled /></el-icon>
          </template>
        </CampaignTableReportColumn>
      </template>
    </el-table-column>

    <!-- Opened -->
    <el-table-column>
      <template #default="scope">
        <CampaignTableReportColumn
          label="Opened"
          :value="scope.row.opened"
          valueColor="#BF51C1"
          :secondary-value="scope.row.open_percentage"
        >
          <template #label-icon v-if="scope.row.status === CampaignStatus.DRAFT">
            <el-icon class="ml-xs" color="#DD9553"><WarnTriangleFilled /></el-icon>
          </template>
        </CampaignTableReportColumn>
      </template>
    </el-table-column>

    <!-- Replied -->
    <el-table-column>
      <template #default="scope">
        <CampaignTableReportColumn
          label="Replied"
          :value="scope.row.replied"
          valueColor="#51C1C1"
          :secondary-value="scope.row.reply_percentage"
        >
          <template #label-icon v-if="scope.row.status === CampaignStatus.DRAFT">
            <el-icon class="ml-xs" color="#DD9553"><WarnTriangleFilled /></el-icon>
          </template>
        </CampaignTableReportColumn>
      </template>
    </el-table-column>

    <!-- Positive reply -->
    <el-table-column>
      <template #default="scope">
        <CampaignTableReportColumn
          label="Positive Reply"
          :value="scope.row.positive_reply"
          valueColor="#2CDB28"
          :secondary-value="scope.row.positive_reply_percentage"
        >
          <template #label-icon>
            <el-icon class="ml-xs" color="#ABACC6"><InfoFilled /></el-icon>
          </template>
        </CampaignTableReportColumn>
      </template>
    </el-table-column>

    <el-table-column :width="160">
      <el-button :icon="VideoPause" size="small" />
      <el-button :icon="Edit" size="small" />
      <el-button :icon="More" size="small" />
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { VideoPause, Edit, More, WarnTriangleFilled, InfoFilled } from '@element-plus/icons-vue'
import { type Campaign, CampaignStatus } from '@/components/email-campaigns/types/Campaign'
import { Link } from '@element-plus/icons-vue'
import CampaignTableReportColumn from '@/components/email-campaigns/CampaignTableReportColumn.vue'
import emailCampaingTableData from './constants/emailCampaingTableData'
import { ref, watch } from 'vue'
import useCampaignTable from '@/components/email-campaigns/composables/useCampaignTable'
import CampaignTableStatusDot from '@/components/email-campaigns/CampaignTableStatusDot.vue'

const props = defineProps<{
  searchText: string
}>()

const { getStausColor } = useCampaignTable()

const emailCampaigns = ref<Campaign[]>(emailCampaingTableData)
const filteredCampaigns = ref<Campaign[]>(emailCampaingTableData)

watch(
  () => props.searchText,
  (value) => {
    filteredCampaigns.value = emailCampaigns.value.filter((item) =>
      item.name.toLowerCase().includes(value.toLocaleLowerCase())
    )
  }
)
</script>

<style lang="scss" scoped>
:deep(.campaing-table__row:hover > td) {
  background-color: #fff !important;
}
.campaign-table__progress :deep(.el-progress__text) {
  font-size: 12px !important;
  margin-left: 0.125rem;
  color: #282b42;
  opacity: 0.6;
}
.campaing-table__row-campaign-details {
  column-gap: 20px;
}
.campaing-table__row-campaign-details-name {
  color: #6e58f1;
}
.campaing-table__row-label {
  color: #282b42;
  opacity: 0.6;
}
</style>
