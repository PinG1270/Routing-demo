<template>
  <div class="tab-bar">
    <ul>
      <li
        v-for="(item, index) in listType[0]"
        :key="index"
        @click="onClick(item)"
      >
        <router-link :to="{ path: '/list/:type' }">{{ item }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { typeOne } from "../api/typeOne.js";
// import { typeTwo } from "../api/typeTwo.js";
// import {typeTwoList} from '../../api/typeTwoList.js'
// import {mapState} from 'vuex'
export default {
  name: "TabBar",
  data() {
    return {
      listType: [],
      typesec: "",
      typesecond: "",
      activeKey: 0,
    };
  },
  created() {
    typeOne().then((res) => {
      //   console.log(res);
      this.listType.push(res);
      console.log(res);
    //  / typeTwo({
    //          type_one:this.typesecond
    //      }).then((res1)=>{
    //          this.typeTwo.push(res1)
    //          console.log(this.typeTwo);
    //      })
    });
  },
  methods: {
    onClick(item) {
      this.$router.push(`/list/${item}`);
      console.log(item);
      this.$emit('getTypeOne',item)
    },
  },
};
</script>
<style>
.tab-bar {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  padding: 20px 0;
}
.type-one ul {
  display: flex;
  justify-content: space-between;
  margin: 0;
}
.type-one ul li a {
  display: inline-block;
  width: 80px;
  height: 30px;
  color: #787878;
  line-height: 30px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s;
}
.type-one ul li a:hover {
  text-decoration: none;
  background-color: purple;
  color: #fff;
}
.type-one-li {
  background-color: purple;
  color: #fff !important;
}
</style>