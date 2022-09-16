<template>
  <div>
    <MyTable :arr="list">
      <template #title>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="{ row }">
        <td>{{ row.id }}</td>
        <td>{{ row.goods_name }}</td>
        <td>{{ row.goods_price }}</td>
        <td>
          <input
            v-focus
            @blur="row.inputVisible = false"
            v-model.trim="row.inputValue"
            @keydown.enter="enterFN(row)"
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-if="row.inputVisible"
            @keydown.esc="row.inputValue = ''"
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            style="color: red"
            class="badge"
            v-for="(str, index) in row.tags"
            :key="index"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delBtn(row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "@/components/MyTable.vue";
export default {
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
  components: {
    MyTable,
  },
  created() {
    this.$axios({
      method: "GET",
      url: "/api/goods",
    }).then((res) => {
      this.list = res.data.data;
    });
  },
  data() {
    return {
      list: [], // 所有数据
    };
  },
  methods: {
    delBtn(id) {
      this.list = this.list.filter((item) => item.id != id);
    },
    enterFN(row) {
      if (row.inputValue.length === 0) {
        alert("请输入标签后，再插入");
        setTimeout(() => {
          row.inputVisible = true;
        });
        return;
      }
      row.tags.push(row.inputValue);
      row.inputValue = "";
    },
  },
};
</script>
<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>