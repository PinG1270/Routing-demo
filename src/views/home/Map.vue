<template>
  <div class="map">
    <div class="block">
      <el-carousel trigger="click" height="580px">
        <el-carousel-item v-for="item in images" :key="item">
          <img :src="item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        require("../../assets/1.jpg"),
        require("../../assets/2.jpg"),
        require("../../assets/3.jpg"),
        require("../../assets/4.jpg"),
        require("../../assets/5.jpg"),
      ],
    };
  },
};
</script>
<style>
button.el-carousel__arrow.el-carousel__arrow--right,
button.el-carousel__arrow.el-carousel__arrow--left{
    background: rgba(128, 0, 128, 0.863);
    font-weight: 800;
    font-size: 16px;
}
.block{
    width: 1200px;
    height: 580px;
    margin: 0 auto;
    border-radius: 20px;
}
.el-carousel__item img {
  width: 1200px;
  height: 580px;
  border-radius: 20px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>