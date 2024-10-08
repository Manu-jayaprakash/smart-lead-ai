<template>
  <el-container class="dashboard-layout__container">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-active="$route.name" router>
          <el-menu-item :index="RouteNames.ALL_LEADS" :route="{ name: RouteNames.ALL_LEADS }">
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
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>

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
  height: 100vh;
}

.dashboard-layout__container .el-menu {
  border-right: none;
}

/* 

.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
} */
</style>
