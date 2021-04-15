<template>
  <div class="home">
    <div class="type-one">
      <tab-bar></tab-bar>
    </div>
    <div class="map">
      <Map />
    </div>
    <div class="good-list">
      <GoodList to="detail" />
    </div>
    <div class="back">
      <Back />
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Map from "./Map.vue";
import TabBar from "../../components/TabBar.vue";
import GoodList from "./GoodList.vue";
import Back from './Back';
export default {
  name: "Home",
  components: {
    TabBar,
    Map,
    GoodList,
    Back,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<style>
</style>