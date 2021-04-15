<template>
  <nav ref="nav">
    <div class="nav">
      <div>
        <div class="logo">
          <img src="../assets/logo copy.png" />
        </div>
        <div class="search" ref="search">
          <input
            type="text"
            id="search"
            placeholder="请输入想要的商品"
            v-model="text"
            @keyup.enter="searchBtn"
          />
          <input type="submit" value="搜索" @click="searchBtn" />
        </div>
      </div>
      <ul>
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/shopcar" v-show="isLogin == true">购物车</router-link
          >
          <router-link to="/login" v-show="isLogin == false">登录</router-link>
        </li>
        <li>
          <a
            v-show="isLogin == true"
            @click="
              $store.commit('setLogin', false);
              $store.commit('setUser');
              $router.push('/home');
            "
            >退出登录</a
          >
          <router-link to="/register" v-show="isLogin == false"
            >注册</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "NavHeader",

  data() {
    return {
      text: "",
    };
  },
  computed: {
    ...mapState(["isLogin", "search"]),
  },
  methods: {
    searchBtn() {
      if (this.text != "") {
        this.$store.commit("text", this.text);
        this.$router.push("/search");
        this.text = "";
        history.go(0);
      } else {
        alert("搜索不能为空");
      }
    },
    scroll() {
      if (scrollY > 90) {
        this.$refs.nav.classList.add("navFixed");
        this.$refs.search.style.transform =
          "translateY(80px) translateX(-100px)";
      } else {
        this.$refs.nav.classList.remove("navFixed");
        this.$refs.search.style.transform =
          "translateY(30px) translateX(-100px)";
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
};
</script>
<style>
nav {
  width: 100%;
  z-index: 999;
  background-color: #fff;
  height: 150px;
  box-shadow: 0 -5px 5px 10px rgba(0, 0, 0, 0.2);
}
.navFixed {
  position: sticky;
  left: 0;
  right: 0;
  top: -94px;
}
.nav>div,
.nav>ul {
  width: 1200px !important;
  margin: 0 auto;
}

.nav > div {
  width: 100%;
  position: relative;
  padding: 20px 0 10px 0;
  height: 105px;
}

.logo {
  float: left;
}

.logo img {
  width: 188px;
}

.nav .search {
  float: right;
  position: relative;
  transform: translateX(-100px) translateY(30px);
}

.nav > div > .search > input:nth-child(1) {
  width: 480px;
  height: 40px;
  font-size: 13px;
  padding-left: 20px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  transition: all 0.2s;
  outline: none;
}

.nav > div > .search > input:nth-child(1):hover {
  border-color: #aaaaaa;
}

.nav > div > .search > input:nth-child(1):focus {
  border-color: #c259c5;
}

.nav > div > .search > input:nth-child(2) {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  width: 90px;
  height: 40px;
  border: 1px solid #dfdfdf;
  color: #838383;
  font-size: 13px;
  background-color: #fff;
  border-radius: 0 5px 5px 0;
  transition: all 0.2s;
  outline: none;
}

.nav > div > .search > input:nth-child(2):hover {
  background-color: rgba(194, 89, 197, 0.1);
  color: rgba(194, 89, 197, 0.8);
  border-color: rgba(194, 89, 197, 0.8);
}

.nav ul > li {
  display: inline-block;
  font-weight: 700;
  text-align: center;
  margin: 0 16px;
  cursor: pointer;
}

.nav ul li a {
  display: inline-block;
  width: 100%;
  padding: 2px 12px;
  color: #000;
  transition: all 0.3s;
  border-bottom: 2px solid transparent;
}

.nav ul li a:hover {
  color: #800080;
  border-bottom: 2px solid #800080;
  text-decoration: none;
}

.router-link-active {
  color: #800080 !important;
  border-bottom: 2px solid #800080 !important;
}

.navLi-border-bt {
  border-bottom: 2px solid #800080 !important;
}

.navA-color {
  color: #800080;
}
</style>