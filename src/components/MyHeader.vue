<template>
  <div 
    class="my-header"
    :style="{ color, backgroundColor: background }"
    >
        {{ title }}
    </div>
</template>

<script>
export default {
    // props: ['color', 'title', 'background']
    props: {
        background: String, // 只能传字符串，如果传别的报错
        title: {
            type: String, // 类型
            required: true // 是否必传此变量
        },
        color: {
            type: String,  // 类型
            default: '#fff' // 如果不传的话，默认是 #fff
        }
    }
}
</script>

<style lang="less" scoped>
  .my-header {
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #1d7bff;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
</style>