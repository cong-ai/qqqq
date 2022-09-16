<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model="allChecked" /> <span>全选</span>
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in goodList" :key="index">
          <input type="checkbox" v-model="item.checked" />
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button @click="reduceFn(item)">-</button>
            {{ item.num }}
            <button @click="addFn(item)">+</button>
          </td>
          <td>{{ item.num * item.price }}</td>
          <button @click="delFn(index)">删除</button>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">{{ total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["goodList"]),
    allChecked: {
      set(value) {
        this.goodList.forEach((item) => (item.checked = value));
      },
      get() {
        return this.goodList.every((item) => item.checked);
      },
    },
    total() {
      return this.goodList.reduce((sum, item) => {
        if (item.checked) {
          return (sum += item.num * item.price);
        } else return (sum += 0);
      }, 0);
    },
  },
  methods: {
    reduceFn(item) {
      item.num--;
    },
    addFn(item) {
      item.num++;
    },
    delFn(i) {
      this.goodList.splice(i, 1);
    },
  },
};
</script>

<style>
</style>