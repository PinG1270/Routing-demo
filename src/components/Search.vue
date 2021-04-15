<template>
  <div class="search">
    <router-link
      v-for="(item, index) in goods" :key="index"
      to="/detail"
      v-show="goods.length != 0"
    >
      <section
        :data-id="item.Id"
        :data-two="item.type_two"
        :data-one="item.type_one"
        @click="goodIndex(item.Id)"
      >
        <img v-lazy="item.img_url" />
        <p>{{ item.title }}</p>
        <p>
          <span>￥{{ item.price }}</span>
          <span v-html="item.mack"></span>
        </p>
      </section>
    </router-link>
    <p v-show="goods.length == 0">
      没有你要搜索的内容<span @click="$router.go(-1)">返回</span>
    </p>
  </div>
</template>
<script>
import { search } from "../api/search.js";
import { mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      goods: [],
    };
  },
  computed: {
    ...mapState(["detail", "search"]),
  },
  methods: {
    setGoodList(id) {
      this.$store.commit("setGoodList", id);
    },
    loadGoods() {
      this.goods = [];
      search({
        word: this.search,
      }).then((res) => {
        res.forEach((item) => {
          this.goods.push(item);
        });
      });
    },
  },
  mounted() {
    this.loadGoods();
  },
};
</script>
<style>
</style>