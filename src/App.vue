<template>
  <div id="app">
    <div class="nav" v-show="showTab">
        <nav-header></nav-header>
    </div>
    <div>
      <router-view></router-view>
    </div>
    
  </div>
</template>
<script>
import NavHeader from './components/NavHeader'
import  { getters } from './store/index.js'
export default {
  components: {
    NavHeader,
  },
  computed:{
    showTab:getters.getShowTab
  },
};
</script>


<style lang="scss">
.nav{
    width: 100%;
    height: 150px;
}
</style>
