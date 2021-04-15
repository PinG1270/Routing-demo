<template>
  <div class="tab-two">
    <div class="listbox" v-for="(itn, index) in listMore" :key="index">
      <h2 class="list_two" ref="h2">{{ itn.type_two }}</h2>
      <ul>
        <li v-for="(it, index) in itn.data" :key="index">
          <div @click="linkDetail(it.Id)" class="lists_con">
            <img :src="it.img_list_url" alt="" />
            <p>{{ it.title }}</p>
            <p>
              <span>￥ {{ it.price }}</span>
              <span v-html="it.mack"></span>
            </p>
          </div>
        </li>
      </ul>
      <div class="list">
        <h2
          v-for="(its, index) in listMore"
          :key="index"
          :class="index == list_index ? 'lister' : ''"
          ref="listH"
          @click="list_color(index, its.type_two)"
        >
          {{ its.type_two }}
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
import { typeTwo } from "../../api/typeTwo.js";
import { typeTwoList } from "../../api/typeTwoList.js";
export default {
  data() {
    return {
      typeTwo: [],
      activeKey: 0,
      listMore: [],
      list: "",
      listLeft: [],
      list_index: 0,
      flagIndex: 0,
      flag1: true,
    };
  },
  props: ["typeone"],
  watch: {
    typeone: {
      deep: true,
      handler: function () {
        this.boo();
      },
    },
  },
  methods: {
    linkDetail(Id) {
      this.$router.push(`/detail/${Id}`);
    },
    boo() {
      typeTwo({
        type_one: this.typeone,
      }).then((res) => {
        this.typeTwo = res.lists;
        this.goo();
      });
    },
    goo() {
      this.listMore = [];
      this.typeTwo.forEach((item) => {
        typeTwoList({
          type_one: this.typeone,
          type_two: item,
        }).then((res) => {
          this.listMore.push(res);
          this.listLeft.push(res);
        });
      });
    },
    list_color(i, name) {
      console.log(name);
      this.list_index = i;
      window.scrollTo({
        left: 0,
        top: this.$refs.h2[i].offsetTop - 60,
        behavior: "smooth",
      });
    },
    scroll() {
      var flag;
      var hTwo = this.$refs.h2;
      hTwo.forEach((value, index) => {
        if (
          window.scrollY + 80 > value.offsetTop &&
          window.scrollY < value.offsetTop
        ) {
          flag = value;
          console.log(index);
        }
      });
      var listHe = this.$refs.listH;
      listHe.forEach((value, index) => {
        if (flag == undefined) {
          return;
        } else {
          if (flag.innerHTML.trim() == value.innerHTML.trim()) {
            listHe.forEach((item) => item.classList.remove("lister"));
            this.$refs.listH[index].classList.add("lister");
          }
        }
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
};
</script>
<style>
.tab-two .tab-two {
  width: 1200px;
  margin: 0 auto;
}
div.listbox {
  width: 1200px;
  margin: 0 auto;
}
div.listbox ul {
  display: flex;
  flex-wrap: wrap;
}
div.listbox ul li {
  width: 300px;
}
div.listbox ul li a {
  border: none !important;
}
div.listbox ul li a:hover {
  border: none;
  background: #fff;
  color: #000 !important;
  list-style: none !important;
}
div.listbox ul li a img {
  width: 300px;
  height: 300px;
}
div.listbox ul li a p {
  color: #000;
}
div.listbox ul li a span {
  color: orangered;
}
.tab-left {
  width: 100px;
  height: 100px;
  display: flex;
  top: 50%;
  left: 100px;
}
.list {
  position: fixed;
  left: 10px;
  top: 400px;
  width: 130px;
  border: 1px solid #9c689c;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
}

.list h2 {
  margin: 0;
  height: 2.2em;
  line-height: 2.2em;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
}

.list h2:hover {
  font-weight: bolder;
  color: purple;
  filter: drop-shadow(purple 0px 0px 10px);
}
.lister {
  font-weight: bolder;
  color: purple;
  filter: drop-shadow(purple 0px 0px 10px);
}
.lists_con > img {
  width: 280px;
  height: 280px;
}
</style>