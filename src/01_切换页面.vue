<template>
  <div>
    <div style="padding: 5px">
      <router-link to="/index">首页</router-link> |
      <router-link to="/sort">分类</router-link> |
      <router-link to="/order">订单</router-link> |
      <router-link to="/my">我的</router-link>
    </div>
    <h2>显示路由切换的位置↓</h2>
    <div style="border: 2px solid skyblue">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>