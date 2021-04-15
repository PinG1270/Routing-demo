<template>
  <div class="back">
    <el-backtop class="backtop">返回<br/>顶部</el-backtop>
  </div>
</template>
<script>
export default {
  name: "Back",
  
};
</script>
<style>
.backtop{
    color: #fff;
    background: rgba(128, 0, 128, 0.76);
    width: 70px;
    height: 70px;
    border-radius: 0px;
    text-shadow: 3px 3px 5px #000;
    box-shadow: 3px 3px 5px rgb(49, 48, 48);
}
.backtop:hover{
    background-color: rgba(168, 7, 168, 0.795);
    text-shadow: -3px -3px 5px #000;
    box-shadow:none;
}
</style>