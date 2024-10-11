<template>
  <div class="navigation-bar flex align-center">
    <div class="navigation-bar__logo">
      <img src="/src/assets/images/logo.svg" alt="logo" />
    </div>

    <div class="navigation-bar__actions flex mr-lg">
      <img src="/src/assets/images/question.svg" alt="question" class="cursor-pointer" />
      <img src="/src/assets/images/gifts.svg" alt="gift" class="cursor-pointer" />

      <el-dropdown trigger="click" popper-class="navigation-bar__dropdown">
        <img src="/src/assets/images/user.svg" alt="user" class="cursor-pointer" />
        <template #dropdown>
          <el-dropdown-menu>
            <div class="navigation-bar__user-details flex">
              <img src="/src/assets/images/user.svg" alt="user" />

              <div class="ml-md column">
                <span class="navigation-bar__user-details-name">Jerome Carlson</span>
                <span class="navigation-bar__user-details-email">jerome.carlson@example.com</span>
              </div>
            </div>

            <div class="navigation-bar__stats">
              Your credit usage detail
              <div class="mt-sm">
                <el-progress :percentage="70" :show-text="false" color="#DD9553" class="mb-sm" />
                <div class="flex">
                  Active Leads:
                  <span class="navigation-bar__stats-link ml-xs"> 84,000 / 90,000</span>
                  <div class="navigation-bar__stats-link ml-auto">Get credits</div>
                </div>
              </div>

              <div class="mt-lg">
                <el-progress :percentage="70" :show-text="false" color="#6CCB4B" class="mb-sm" />
                Email Credits:
                <span class="navigation-bar__stats-link ml-xs"> 24,000 / 90,000</span>
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Box, Setting, QuestionFilled, ChatDotRound, SoldOut } from '@element-plus/icons-vue'
import { useAuthStore } from '@/stores/useAuthStore'
import { useRouter } from 'vue-router'
import { RouteNames } from '@/router/constants/RouteNames'

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
.navigation-bar__logo {
  margin: 1.125rem auto 1.125rem 1.5rem;
  cursor: pointer;
}

.navigation-bar {
  background-color: #00056a;
}
.navigation-bar__actions {
  column-gap: 1.25rem;
}
.navigation-bar__user-details {
  padding: 1.125rem;
  img {
    width: 45px;
    height: 45px;
  }
}
.navigation-bar__user-details-name {
  font-weight: 500;
  font-size: 1rem;
}
.navigation-bar__user-details-email {
  color: #00011599;
}
.navigation-bar__stats {
  padding: 1.125rem;
  background-color: #f7f8fe;
}
.navigation-bar__stats-link {
  color: #757ae9;
  font-weight: 500;
  border-bottom: 1px dotted #757ae9;
}
:global(.navigation-bar__dropdown) {
  min-width: 21.375rem;
}
</style>
