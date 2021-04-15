<template>
  <div class="login">
    <input
      type="text"
      id="userName"
      placeholder="用户名"
      v-model="user.username"
      pattern="^[a-zA-Z][a-zA-Z0-9_]{4,15}$"
      @keyup.enter="login"
      @blur="regexp($event, user.username)"
    />
    <span></span>
    <input
      type="password"
      id="password"
      placeholder="密码"
      v-model="user.password"
      pattern="^[a-zA-Z]\w{5,17}$"
      @keyup.enter="login"
      @blur="regexp($event, user.password)"
    />
    <span></span>
    <input type="submit" value="登录" id="login"  @click="login" />
  </div>
</template>
<script>
import {login} from '../api/login.js'
import {setLocalStorage} from '../utils/storage.js'
export default {
  name:'Login',
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      checked: false,
    };
  },
  methods:{
    login(){
      if(this.checked==false){
        alert('格式错误')
      }else{
        login(this.user).then((item)=>{
          console.log(item);
         
          if(item.code==0){
            alert('用户名不存在')
          }else if(item.code==1){
            alert('密码错误')
          }else{
            this.$store.commit('setLogin',true);
            this.$store.commit('setUser',this.user.username)
            alert('登录成功') ;
            setLocalStorage('token',item.token)
            let url = this.$route.query.url
            if(url){
              this.$router.push(url)
            }else{
              this.$router.push('/home')
            }
          }
        })
      }
    },
    regexp(event, value) {
				var parent = event.target.getAttribute('pattern')
				var newReg = new RegExp(parent);
				var newExp = newReg.test(value);
				if (newExp) {
					this.checked = true
				} else {
					this.checked = false
				}
			}
  }
};
</script>
<style>
.login {
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

#login {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  color: #fff;
  background-color: #67c23b;
  outline: none;
}

#login:hover {
  opacity: 0.8;
}

.login span {
  position: absolute;
  left: 0;
  font-size: 13px;
  transform: translateY(-22px);
}
</style>