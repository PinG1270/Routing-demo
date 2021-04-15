<template>
  <div class="register">
    <input
      type="text"
      id="userName"
      placeholder="用户名"
      v-model="user.username"
      pattern="^[a-zA-Z][a-zA-Z0-9_]{4,15}$"
      @keyup.enter="register"
      @blur="regexp($event, user.username)"
    />
    <span></span>
    <input
      type="password"
      id="password"
      placeholder="密码"
      v-model="user.password"
      pattern="^[a-zA-Z]\w{5,17}$"
      @keyup.enter="register"
      @blur="regexp($event, user.password)"
    />
    <span></span>
    <input type="submit" value="注册" id="register" @click="registe" />
  </div>
</template>
<script>
import { register } from "../api/register.js";
export default {
  name:'Register',
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      checked: false,
    };
  },
  methods: {
    registe() {
      if (this.checked == false) {
        alert("格式错误");
      } else {
        console.log(this.user);
        register(this.user).then((res) => {
          if(res.code == 0){
							alert('注册失败，用户名被占用')
						}else{
							alert('注册成功，即将跳转登录页')
							this.$router.push('/login')
						}
        });
      }
    },
    regexp(event,value){
				var parent = event.target.getAttribute('pattern')
				var reg = new RegExp(parent);
				var newPar = reg.test(value);
				if(newPar){
					this.checked = true
				}else{
					this.checked = false
				}
			}
  },
};
</script>
<style>
.register {
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
  position: relative;
}

#userName,
#password {
  width: 100%;
  height: 40px;
  font-size: 13px;
  padding-left: 20px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  transition: all 0.2s;
  margin-bottom: 25px;
  outline: none;
}

#userName:hover,
#password:hover {
  border-color: #aaaaaa;
}

#userName:focus,
#password:focus {
  border-color: #c259c5;
}

#register {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  color: #fff;
  background-color: #67c23b;
  outline: none;
}

#register:hover {
  opacity: 0.8;
}

.register span {
  position: absolute;
  left: 0;
  font-size: 13px;
  transform: translateY(-22px);
}
</style>