<template>
  <el-container class="dashboard-layout__container">
    <el-aside width="230px" class="dashboard-layout__container-aside">
      <slot name="dashboard-aside-menu" />
    </el-aside>

    <el-container>
      <el-main class="dashboard-layout__main">
        <slot name="dashboard-page-view" />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.dashboard-layout__container {
  height: 100%;
}

.dashboard-layout__container .el-aside {
  color: var(--el-text-color-primary);
  background: #fff;
}

.dashboard-layout__container-aside {
  border-right: 1px solid #e1e3ef;
}

.dashboard-layout__main {
  padding: 0px;
}
</style>
