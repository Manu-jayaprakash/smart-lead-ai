<template>
  <el-dropdown trigger="click" popper-class="navigation-bar-menu">
    <img src="/src/assets/images/user.svg" alt="user" class="cursor-pointer" />
    <template #dropdown>
      <el-dropdown-menu>
        <div class="navigation-bar-menu__user-details flex">
          <img src="/src/assets/images/user.svg" alt="user" />

          <div class="ml-md column">
            <span class="navigation-bar-menu__user-details-name">Jerome Carlson</span>
            <span class="navigation-bar-menu__user-details-email">jerome.carlson@example.com</span>
          </div>
        </div>

        <div class="navigation-bar-menu__stats">
          Your credit usage detail
          <div class="mt-sm">
            <el-progress :percentage="70" :show-text="false" color="#DD9553" class="mb-sm" />
            <div class="flex">
              Active Leads:
              <span class="navigation-bar-menu__stats-link ml-xs"> 84,000 / 90,000</span>
              <div class="navigation-bar-menu__stats-link ml-auto">Get credits</div>
            </div>
          </div>

          <div class="mt-lg">
            <el-progress :percentage="70" :show-text="false" color="#6CCB4B" class="mb-sm" />
            Email Credits:
            <span class="navigation-bar-menu__stats-link ml-xs"> 24,000 / 90,000</span>
          </div>
        </div>

        <el-dropdown-item>
          <el-icon><Setting /></el-icon> Settings
        </el-dropdown-item>

        <el-dropdown-item>
          <el-icon><Box /></el-icon> What's New
        </el-dropdown-item>

        <el-dropdown-item>
          <el-icon><QuestionFilled /></el-icon> Help Guide
        </el-dropdown-item>

        <el-dropdown-item>
          <el-icon><ChatDotRound /></el-icon> Join our slack community
        </el-dropdown-item>

        <el-dropdown-item divided @click="handleLogout">
          <el-icon><SoldOut /></el-icon>Logout
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/useAuthStore'
import { useRouter } from 'vue-router'
import { RouteNames } from '@/router/constants/RouteNames'
import { Box, Setting, QuestionFilled, ChatDotRound, SoldOut } from '@element-plus/icons-vue'

const router = useRouter()

const { setUserEmail, setRoiAnnouncemnetViewed } = useAuthStore()

const handleLogout = () => {
  void setUserEmail('')
  void setRoiAnnouncemnetViewed(false)
  localStorage.removeItem('email')
  localStorage.removeItem('is_roi_announcemnet_viewed')
  router.push({ name: RouteNames.LOGIN })
}
</script>

<style lang="scss" scoped>
.navigation-bar-menu__user-details {
  padding: 1.125rem;
  img {
    width: 45px;
    height: 45px;
  }
}
.navigation-bar-menu__user-details-name {
  font-weight: 500;
  font-size: 1rem;
}
.navigation-bar-menu__user-details-email {
  color: #00011599;
}
.navigation-bar-menu__stats {
  padding: 1.125rem;
  background-color: #f7f8fe;
}
.navigation-bar-menu__stats-link {
  color: $primary;
  font-weight: 500;
  border-bottom: 1px dotted $primary;
}
:global(.navigation-bar-menu) {
  min-width: 21.375rem;
}
</style>
