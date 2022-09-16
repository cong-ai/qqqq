<template>
  <div>
    <MyHeader
      :background="'blue'"
      :fontColor="'white'"
      title="TabBar案例"
    ></MyHeader>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="my-tab-bar">
      <div class="tab-item" v-for="(item, index) in tabList" :key="index">
        <span class="iconfont" :class="item.iconText"></span>
        <router-link :to="item.path">{{ item.text }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyTabBar from "@/components/MyTabBar.vue";
export default {
  components: {
    MyHeader,
    MyTabBar,
  },
  data() {
    return {
      tabList: [
        {
          path: "/mygoodslist",
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          path: "/mygoodssearch",
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          path: "/myuserinfo",
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 51px;
}
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
}
.my-tab-bar a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}
</style>