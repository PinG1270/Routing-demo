<template>
  <div class="good-list">
    <ul class="lists">
      <li v-for="(item, index) in shopList" :key="index" @click="linkDetail(item.Id)">
        <img :src="item.img_list_url" alt="" />
        <h3 class="title">{{ item.title }}</h3>
        <p>
          <span class="price">￥{{ item.price }}</span>
          <span class="mack" v-html="item.mack"></span>
        </p>
      </li>
    </ul>
    <div class="more" v-show="isShow">
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
      >
      </el-table>
    </div>
  </div>
</template>
<script>
import { getShopList } from "../../api/home.js";
import { getters } from "../../store/index.js";
export default {
  name: "GoodList",
  data() {
    return {
      count: 1,
      shopList: [],
      isShow: false,
      flag: true,
      loading: true,
    };
  },
  methods: {
    linkDetail(Id) {
      this.$router.push(`./detail/${Id}`);
    },
    bar() {
      getShopList({ page: this.count }).then((res) => {
        console.log(res);
        this.shopList.push(...res);
        setTimeout(() => {
          getters.getShowLoad(false);
        }, 4000);
      });
    },
  },
  created() {
    this.bar();
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (scrollY + innerHeight >= document.body.scrollHeight && this.flag) {
        this.flag = false;
        this.isShow = true;
        setTimeout(() => {
          this.flag = true;
          this.count++;
          this.bar();
        }, 2000);
      } else {
        this.isShow = false;
      }
    });
  },
  
};
</script>
<style>
ul[class="lists"] {
  width: 1220px;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
}

ul[class="lists"] > h1 {
  width: 100%;
  height: auto;
  text-align: center;
  margin: 20px 0 0;
}

ul[class="lists"] > li {
  width: 20%;
  height: auto;
  padding: 20px;
  box-sizing: border-box;
}

ul[class="lists"] > li {
  color: #111;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

ul[class="lists"] > li > img {
  width: 100%;
  background-color: #ccc;
}

ul[class="lists"] > li > h3 {
  text-overflow: ellipsis;
  white-space: nowrap;
  align-self: start;
  font-size: 16px;
}

ul[class="lists"] > li > p {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul[class="lists"] > li > p > span {
  display: inline-block;
}

ul[class="lists"] > li > p > span:first-of-type {
  color: red;
}
</style>