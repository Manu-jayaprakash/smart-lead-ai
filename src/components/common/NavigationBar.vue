<template>
  <el-menu
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :ellipsis="false"
  >
    <div class="navigation-bar__logo">Logo</div>
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-menu-item index="2">Info</el-menu-item>
    <el-menu-item index="3">Orders</el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.navigation-bar__logo {
  margin-right: auto;
  cursor: pointer;
}
.el-menu--horizontal {
  --el-menu-horizontal-height: 50px;
}
</style>
