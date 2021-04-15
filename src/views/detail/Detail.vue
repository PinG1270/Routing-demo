<template>
  <section ref="section">
    <div class="detail">
      <div class="head">
        <button @click="onClick">返回</button>
      </div>
      <div class="detail-card">
        <div class="detail-img">
          <div
            @mouseenter="block"
            @mouseleave="none"
            @mousemove="maskMove"
            class="mackY"
          >
            <div class="mask" ref="mask"></div>
            <img :src="images" alt="" />
          </div>

          <div class="detail-more" :imgs="imgs">
            <div
              v-for="(item, index) in imgs"
              :key="index"
              @click="changeClick(item)"
            >
              <img :src="item" alt="" />
            </div>
          </div>

          <div class="largeImg" ref="largeBox">
            <img :src="images" alt="" ref="largeImg" />
          </div>
        </div>

        <div class="port">
          <p class="desc">{{ shop.title }}</p>
          <div class="nice">
            <span>{{ shop.supplier }} </span><br />
            <span>￥ {{ shop.price }}</span>
          </div>
          <div class="message">
            <el-rate v-model="value" show-text> </el-rate>
          </div>
          <div class="shop">
            <button @click="addShop(shop,shop.Id)">添加购物车</button>
          </div>
        </div>
      </div>
      <Analogue />
      <div>
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>
<script>
import { getters } from "../../store/index.js";
import { getDetail } from "../../api/detail.js";
import Analogue from "./Analogue.vue";
import { mapState } from "vuex";
import { getAdd } from "../../api/add.js";
import { getLocalStorage } from "../../utils/storage";
// import Bus from  '../../plugins/bus.js'
export default {
  name: "Detail",
  components: { Analogue },
  porps:['shopCar'],
  data() {
    return {
      value: null,
      imgs: [],
      shop: {},
      num: "0",
      images: "",
      time:{}
    };
  },
  computed: {
    ...mapState(["detail", "username", "isLogin"]),
  },
  methods: {
    onClick() {
      this.$router.back();
      getters.setBack(true);
    },
    foo() {
      getDetail({
        goodId: this.$route.params.goodId,
      }).then((res) => {
        this.shop = res[0];
        this.imgs = JSON.parse(res[0].imgs);
        this.images = this.imgs[0];
      });
    },
    block() {
      this.$refs.mask.style.display = "block";
      this.$refs.largeBox.style.display = "block";
    },
    none() {
      this.$refs.mask.style.display = "none";
      this.$refs.largeBox.style.display = "none";
    },
    maskMove(ev) {
      var section = this.$refs.section;
      var mask = this.$refs.mask;
      var largeImg = this.$refs.largeImg;

      var left = section.offsetLeft;
      var top = section.offsetTop - window.scrollY;
      var leftH = ev.clientX - left - 100;
      var topT = ev.clientY - top - 150;
      if (leftH <= 0) {
        leftH = 0;
      }
      if (leftH >= 200) {
        leftH = 200;
      }
      if (topT <= 1) {
        topT = 1;
      }
      if (topT >= 200) {
        topT = 200;
      }
      mask.style.left = leftH + "px";
      mask.style.top = topT + "px";
      largeImg.style.left = leftH * -2 + "px";
      largeImg.style.top = topT * -2 + "px";
    },
    changeClick(i) {
      this.images = i;
    },
    addShop(item,id) {
      console.log(item);
      if (this.isLogin == false) {
        alert("请先登录");
        this.$router.push("/login");
      } else {
        getAdd({
          username: this.username,
          token: getLocalStorage("token"),
          goodId: id
        }).then((res) => {
          if (res.code == 0) {
            alert("添加失败");
          } else {
            alert("添加成功");
          }
        });
      }
    },
  },
  created() {
    getters.setBack(false);
    this.foo();
  },
};
</script>
<style>
section {
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
}
.detail {
  width: 100%;
  height: auto;
}
.head {
  width: 1200px;
  height: 80px;
  margin: 0 auto;
}
.head button {
  width: 100px;
  height: 50px;
  background: rgb(236, 236, 236);
  outline: none;
  margin: 30px;
  border: 1px solid #ccc;
}
button:hover {
  background: rgb(206, 204, 204);
}
.detail-img {
  float: left;
}
.detail-more {
  margin-top: 35px;
  display: flex;
}
.detail-more img {
  width: 100%;
}
.detail-card {
  height: 550px;
}
.detail-card .port {
  margin-left: 620px;
  margin-top: 35px;
}
.port p {
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 30px;
}

.port .nice {
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nice span:nth-child(1) {
  margin-top: 20px;
  color: #b0b0b0;
}
.nice span:last-child {
  color: orangered;
  margin-bottom: 60px;
}
.port .shop {
  margin-top: 20px;
}
.shop button {
  width: 140px;
  height: 50px;
  background: orangered;
  outline: none;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
}
.detail-more img {
  width: 60px;
  height: 70px;
  margin-right: 20px;
}
.mask {
  height: 200px;
  width: 200px;
  background-color: rgba(123, 136, 255, 0.3);
  position: absolute;
  top: 0;
  cursor: move;
  display: none;
}
.largeImg {
  width: 400px;
  height: 400px;
  border: 1px solid #dcdcdc;
  position: absolute;
  top: 100px;
  z-index: 1;
  /* right: 0; */
  right: 180px;
  overflow: hidden;
  display: none;
}
.mackY {
  position: relative;
  top: 0;
  left: 0;
  /* margin-bottom: 20px; */
}
.mackY img {
  width: 400px;
  height: 400px;
}
.largeImg img {
  width: 800px;
  height: 800px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
