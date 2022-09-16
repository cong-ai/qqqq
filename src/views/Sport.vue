<template>
  <div>
    <div>
      <h2>体育-改变人生</h2>
      <router-link to="/sport/sportpage">体育的主页</router-link> |
      <router-link to="/sport/domestic">国内的主页</router-link> |
      <router-link to="/sport/abroad">国外的主页</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>