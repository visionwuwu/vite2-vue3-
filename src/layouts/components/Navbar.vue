<template>
  <div class="app-navbar">
    <!-- 左侧菜单区域 -->
    <div class="left-menu">
      <i class="toggle-btn el-icon-s-fold"></i>
      <!-- 面包屑 -->
      <breadcrumb></breadcrumb>
    </div>
    <!-- 右侧菜单 -->
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" src="/src/assets/logo.png" />
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>
          <a href="https://visonwuwu.github.io/" target="_blank">
            <el-dropdown-item>我的Github</el-dropdown-item>
          </a>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from "comps/Breadcrumb/index.vue";
</script>

<style lang="scss" scoped>
.left-menu {
  display: flex;
  align-items: center;
  line-height: 50px;
  .toggle-btn {
    font-size: 20px !important;
    margin-top: 1px;
    color: gray !important;
    cursor: pointer;
  }
}
.right-menu {
  .avatar-container {
    margin-right: 30px;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;

      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }

      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}


</style>
