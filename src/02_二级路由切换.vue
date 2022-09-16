<template>
  <div>
    <div style="padding: 5px">
      <h1>嵌套路由</h1>
      <router-link to="/homepage">主页</router-link> |
      <router-link to="/news">新闻</router-link> |
      <router-link to="/sport">体育</router-link>
    </div>
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