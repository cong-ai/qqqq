<template>
  <div class="my-tab-bar">
    <div
      @click="activeIndex = index;"
      :class="{ current: activeIndex === index }"
      class="tab-item"
      v-for="(item, index) in arr"
      :key="index"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
  props: {
    arr: {
      type: Array,
      // 校验数据，若通过校验则返回true,否则返回false
      validator(value) {
        if (value.length < 2 || value.length > 5) {
          console.error(
            "The arr length must be between two and five in props "
          );
          return false;
        }
        return true;
      },
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>