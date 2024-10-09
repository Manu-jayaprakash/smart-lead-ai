<template>
  <el-table :data="emailCampaigns" row-class-name="campaing-table__row">
    <el-table-column width="40" type="selection" />
    <!-- Campaign Details -->
    <el-table-column label="Campaign Details" width="360">
      <template #default="scope">
        <div class="campaing-table__row-campaign-details flex">
          <el-progress
            type="circle"
            :percentage="scope.row.percentage"
            class="campaign-table__progress"
            width="50"
            color="#5ECA39"
          />
          <div>
            <div class="campaing-table__row-campaign-details-name flex align-center cursor-pointer">
              <div class="mr-sm">{{ scope.row.name }}</div>
              <el-icon><Link /></el-icon>
            </div>
            <div class="flex align-center">
              <span class="campaing-table__row-campaign-details-status-dot mr-sm"></span>
              <span class="campaing-table__row-label">
                {{ scope.row.date_info }} | {{ scope.row.sequence }}
              </span>
            </div>
          </div>
        </div>
      </template>
    </el-table-column>

    <!-- Sent -->
    <el-table-column label="Report">
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
        />
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
        />
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
        />
      </template>
    </el-table-column>

    <!-- Positive reply -->
    <el-table-column>
      <template #default="scope">
        <CampaignTableReportColumn
          label="Click"
          :value="scope.row.positive_reply"
          valueColor="#2CDB28"
          :secondary-value="scope.row.positive_reply_percentage"
        />
      </template>
    </el-table-column>

    <el-table-column width="160">
      <el-button :icon="VideoPause" size="small" />
      <el-button :icon="Edit" size="small" />
      <el-button :icon="More" size="small" />
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { VideoPause, Edit, More } from '@element-plus/icons-vue'
import { type Campaign } from '@/components/email-campaigns/types/Campaign'
import { Link } from '@element-plus/icons-vue'
import CampaignTableReportColumn from '@/components/email-campaigns/CampaignTableReportColumn.vue'
import emailCampaingTableData from './constants/emailCampaingTableData'
import { ref } from 'vue'

const emailCampaigns = ref<Campaign[]>(emailCampaingTableData)
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
.campaing-table__row-campaign-details-status-dot {
  height: 6px;
  width: 6px;
  background-color: #5eca39;
  border-radius: 50%;
  display: inline-block;
  opacity: 1;
}
</style>
