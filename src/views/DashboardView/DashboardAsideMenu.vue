<template>
  <el-menu :default-active="$route.name" router text-color="#282B42" class="dashboard-aside-menu">
    <el-menu-item
      :index="RouteNames.ALL_LEADS"
      :route="{ name: RouteNames.ALL_LEADS }"
      class="mt-sm"
    >
      <el-icon><Guide /></el-icon>
      <span>All Leads</span>
    </el-menu-item>

    <el-menu-item :index="RouteNames.MASTER_INBOX" :route="{ name: RouteNames.MASTER_INBOX }">
      <el-icon><MessageBox /></el-icon>
      <span>Master Inbox</span>
    </el-menu-item>

    <el-menu-item :index="RouteNames.EMAIL_CAMPAIGNS" :route="{ name: RouteNames.EMAIL_CAMPAIGNS }">
      <el-icon><Service /></el-icon>
      <span>Email Campaigns</span>
    </el-menu-item>
  </el-menu>

  <div class="dashboard-aside-menu__footer">
    <div class="flex align-center cursor-pointer" @click="handleRedirection">
      <el-icon :size="20"><ChatDotRound /></el-icon>
      Join Slack Community
    </div>

    <div class="flex align-center cursor-pointer mt-lg mb-lg" @click="handleRedirection">
      <el-icon :size="20"><VideoPlay /></el-icon>
      Smartlead Tutorials
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ChatDotRound, Guide, MessageBox, Service, VideoPlay } from '@element-plus/icons-vue'
import { RouteNames } from '@/router/constants/RouteNames'

const handleRedirection = () => {
  window.open('https://google.com')
}
</script>

<style lang="scss" scoped>
.dashboard-aside-menu.el-menu {
  border-right: none;
  .el-menu-item {
    padding-left: 0;
    .el-icon {
      margin-left: 1.25rem;
    }
    &::before {
      content: '';
      width: 3px;
      height: 100%;
    }
  }
  .is-active {
    background: #757ae91a;
    color: #282b42;
    &::before {
      background: #757ae9;
    }
  }
}

.dashboard-aside-menu__footer {
  position: absolute;
  bottom: 0;
  .el-icon {
    margin: 0 20px;
  }
}
</style>
