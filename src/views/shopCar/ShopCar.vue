<template>
  <div class="shop-car">
    <section>
      <h2>全部商品<span class="quantity"> kk</span></h2>
      <hr />
      <div class="all">
        <input type="checkbox" name="all" id="all" />
        <label for="all">全选</label>
        <span class="top-message">商品信息</span>
        <span class="top-oneprice">单价</span>
        <span class="top-nums">数量</span>
        <span class="top-money">金额</span>
        <span class="top-do">操作</span>
        <div class="commodity-getDetails" v-for="(item,index) in shopCarList[0]" :key="index">
          <input type="checkbox" />
          <div class="message">
            <!-- v-lazy="n.img_url" -->
            <img :src="item.img_list_url" />
            <div>
              <span class="title">{{item.title}}</span><br />
              <span class="from">{{item.type_two}}</span>
            </div>
          </div>
          <div class="price">￥<span>{{item.price}}</span>.00</div>
          <div class="nums">
            <button class="down" @click="reduce(item)">-</button>
            <input type="number" id="nums" :value="item.count" />
            <button class="up" @click="plus(item)">+</button>
          </div>
          <div class="allprice">￥<span>{{item.price * item.count}} </span><span>.00</span></div>
          <div class="remove" @click="remove(index)">删除</div>
        </div>

        <div class="bottom">
          <span
            >合计：
            <span>￥</span>
            <span>00</span>
            <span>.00</span>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// import { typeOne } from "../../api/shopList.js";
import { remove } from "../../api/remove.js";
import { shopList } from "../../api/shopList.js";
import { getLocalStorage } from "../../utils/storage.js";

export default {
  data() {
    return {
      shopCarList: [],
      count:[],
      allCheck:false,
      ischeck:false
    };
  },
  created(){
    this.shopList()
  },
  methods: {
    shopList() {
      shopList({
					username: this.username,
          token:getLocalStorage('token')
				}).then((res) => {
          this.shopCarList.push(res)
					console.log(this.shopCarList);
				})
    },
    plus(item){
      item.count++
    },
    reduce(item){
      item.count--
      
    },
    remove(index,id){
      remove({
        username: this.username,
        token:getLocalStorage('token'),
        goodId: id
      }).then((res)=>{
        if(res.code==0){
          return
        }else{
          var newCount = this.shopCarList[index]
          console.log(newCount);
          newCount.splice(index,1)
        }
      })
    }

  },
  watch:{
    shopCarList:{
      deep:true,
      handler(){
        console.log('aa');
        let arr = [];
        this.shopCarList.forEach((item)=>{
          if(this.ischeck){
            if(arr.indexOf(item.Id)===-1){
              arr.push(item.Id)
            }
          }
        });
        if(arr.length === this.shopCarList.length){
          this.allChecked = true
        }else{
          this.allChecked = false
        }
      }
    }
  }
  // methods: {
  //   getShopList() {
  //     typeOne({
  //       username: this.username,
  //     }).then((res) => {
  //       for (let i = 0; i < res.length; i++) {
  //         this.count.push(res.count);
  //         getDetail({
  //           Id: res.Id,
  //         }).then((res2) => {
  //           console.log(res2);
  //           this.goods.push(res2);
  //           this.checkBox.push(false);
  //         });
  //       }
  //     });
  //   },

  //   down(i, id) {
  //     console.log(i,id);
  //     remove({
  //       username: this.username,
  //       Id: id,
  //     }).then((res) => {
  //       if (res.code == 0) {
  //         return;
  //       } else {
  //         var newCount = this.count[i] - 1;
  //         this.count.splice(i, 1, newCount);
  //         this.allPrice();
  //       }
  //     });
  //   },
  //   up(i, id) {
  //     getAdd({
  //       username: this.username,
  //       Id: id,
  //     }).then((res) => {
  //       if (res.data.code == 0) {
  //         return;
  //       } else {
  //         var newCount = this.count[i] + 1;
  //         this.count.splice(i, 1, newCount);
  //         this.allPrice();
  //       }
  //     });
  //   },
  //   remove(i, id) {
  //     del({
  //       username: this.username,
  //       Id: id,
  //     }).then((res) => {
  //       if (res.data.code == 0) {
  //         alert("删除失败");
  //       } else {
  //         this.checkBox.splice(i, 1);
  //         this.goods.splice(i, 1);
  //         alert("删除成功");
  //       }
  //     });
  //     this.allPrice();
  //   },
  //   allChecks() {
  //     for (let i = 0; i < this.checkBox.length; i++) {
  //       this.checkBox.splice(i, 1, !this.allCheck);
  //     }
  //     this.allPrice();
  //   },
  //   allPrice() {
  //     this.allprice = 0;
  //     for (let i = 0; i < this.checkBox.length; i++) {
  //       if (this.checkBox[i]) {
  //         this.allprice += this.goods[i].price * this.count[i];
  //       }
  //     }
  //   },
  // },
  // mounted() {
  //   this.getShopList();
  // },
  // watch: {
  //   checkBox() {
  //     this.allCheck = this.checkBox.every((item) => {
  //       if (item) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //     this.allPrice();
  //   },
  // },
};
</script>
<style>
section {
  width: 1100px;
  margin: 0 auto;
  padding-top: 20px;
  position: relative;
}

section h2 {
  font-size: 20px;
  color: #ffaa00;
}

section h2 span {
  color: #c58300;
}

.quantity {
  margin-left: 10px;
  font-size: 14px;
}

.all {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 30px;
}

.top-message,
.top-money {
  margin-left: 110px;
}

.top-do {
  margin-left: 80px;
}

.top-oneprice {
  margin-left: 300px;
}

.top-nums {
  margin-left: 150px;
}

#shops {
  padding: 0 10px;
  position: relative;
}

#shops > label {
  position: absolute;
  top: 0;
  left: 30px;
}

.commodity-getDetails {
  border: 1px solid #c2c2c2;
  padding: 15px 10px;
  position: relative;
}

.message {
  display: inline-block;
  vertical-align: middle;
  width: 400px;
  padding-left: 10px;
}

.message img {
  vertical-align: top;
  width: 80px;
  height: 80px;
}

.message div {
  display: inline-block;
  margin-left: 10px;
}

.title {
  vertical-align: top;
  font-weight: 600;
}

.from {
  font-size: 12px;
  color: #878787;
}

.price {
  width: 50px;
  display: inline-block;
  margin-left: 75px;
}

.nums {
  display: inline-block;
  margin-left: 95px;
}

.down,
.up {
  width: 30px;
  height: 30px;
  background-color: #fff;
  font-size: 20px;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
}

.nums > input {
  width: 50px;
  height: 30px;
  text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.allprice {
  width: 150px;
  display: inline-block;
  margin-left: 50px;
  color: red;
}

.remove {
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  position: absolute;
  right: 25px;
  top: 36px;
}

.remove:hover {
  text-decoration: underline;
  color: red;
}

.bottom {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #dcdcdc;
  margin-top: 20px;
  position: relative;
  margin-bottom: 100px;
}

.bottom > span {
  margin-left: 20px;
}

.bottom > span > span {
  color: red;
  font-size: 20px;
}
</style>