<template>
  <div class="good-list">
    <tab-bar @getTypeOne="getTypeOne"></tab-bar>
    <type-two :typeone="typeone"></type-two>
  </div>
</template>
<script>
import TabBar from "../../components/TabBar.vue";
import typeTwo from './typeTwo.vue'
export default {
  data(){
    return {
      typeone:''
    }
  },
  components: {
    TabBar,
    typeTwo
  },
  methods:{
    getTypeOne(res) {
      console.log(res);
      this.typeone = res
    }
  }
};
</script>
<style>
.good-list .tab-bar ul {
  display: flex;
  justify-content: space-between;
}
.good-list .tab-bar ul li a {
  border: none !important;
  display: inline-block;
  width: 80px;
  height: 30px;
  color: #787878 !important;
  line-height: 30px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s;
}
.good-list ul li a:hover {
  text-decoration: none;
  background-color: purple;
  color: #fff !important;
}
</style>