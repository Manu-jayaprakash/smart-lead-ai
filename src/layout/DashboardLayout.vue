<template>
  <el-container class="dashboard-layout__container">
    <el-aside width="230px" class="dashboard-layout__container-aside">
      <el-menu :default-active="$route.name" router text-color="#282B42">
        <el-menu-item
          :index="RouteNames.ALL_LEADS"
          :route="{ name: RouteNames.ALL_LEADS }"
          class="mt-sm"
        >
          <el-icon><setting /></el-icon>
          <span>All Leads</span>
        </el-menu-item>
        <el-menu-item :index="RouteNames.MASTER_INBOX" :route="{ name: RouteNames.MASTER_INBOX }">
          <el-icon><setting /></el-icon>
          <span>Master Inbox</span>
        </el-menu-item>
        <el-menu-item
          :index="RouteNames.EMAIL_CAMPAIGNS"
          :route="{ name: RouteNames.EMAIL_CAMPAIGNS }"
        >
          <el-icon><setting /></el-icon>
          <span>Email Campaigns</span>
        </el-menu-item>
      </el-menu>

      <div class="aside-menu__footer">
        <div class="flex align-center cursor-pointer" @click="handleRedirection">
          <el-icon :size="20"><setting /></el-icon>
          Join Slack Community
        </div>

        <div class="flex align-center cursor-pointer mt-lg mb-lg" @click="handleRedirection">
          <el-icon :size="20"><setting /></el-icon>
          Smartlead Tutorials
        </div>
      </div>
    </el-aside>

    <el-container>
      <el-main>
        <el-scrollbar>
          <RouterView />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { Setting } from '@element-plus/icons-vue'
import { RouteNames } from '@/router/constants/RouteNames'

const handleRedirection = () => {
  window.open('https://google.com')
}
</script>

<style scoped lang="scss">
.dashboard-layout__container .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.dashboard-layout__container .el-aside {
  color: var(--el-text-color-primary);
  background: white;
  height: calc(100vh - 130px);
}

.dashboard-layout__container .el-menu {
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
.dashboard-layout__container-aside {
  position: relative;
}

.aside-menu__footer {
  position: absolute;
  bottom: 0;
  .el-icon {
    margin: 0 20px;
  }
}
</style>
