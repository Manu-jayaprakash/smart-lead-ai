<template>
  <el-row justify="space-between" class="roi-announcement">
    <el-col :span="12" class="roi-announcement--col-1 flex">
      <el-icon :size="40" class="cursor-pointer ml-lg mr-lg">
        <Dish color="#757ae9" />
      </el-icon>

      <span>Here's a chance to further increase your ROI.</span>
      <span>Pay only $540.00 instead of $59000</span>
    </el-col>

    <el-col :span="6" class="roi-announcement--col-2 mr-lg flex">
      <CommonButton label="15% off for 3 months" />

      <el-icon :size="20" class="cursor-pointer ml-lg" @click="handleCloseRoiAnnouncemnet">
        <Close color="#9294A2" />
      </el-icon>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import CommonButton from '../common/CommonButton.vue'
import { Close, Dish } from '@element-plus/icons-vue'
import { useAuthStore } from '@/stores/useAuthStore'

const { setRoiAnnouncemnetViewed } = useAuthStore()

const handleCloseRoiAnnouncemnet = () => {
  void setRoiAnnouncemnetViewed(true)
  localStorage.setItem('is_roi_announcemnet_viewed', 'true')
}
</script>

<style lang="scss" scoped>
.roi-announcement {
  background-color: #757ae933;
  height: 5rem;
}
.roi-announcement--col-1 {
  align-items: center;
  justify-content: center;
}
.roi-announcement--col-2 {
  justify-content: flex-end;
  align-items: center;
}
</style>
