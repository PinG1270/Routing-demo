// 创建全局响应式数据
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let state = Vue.observable({
    showLoad:true,
    showTab:true,
    isLogin:false,
    username:'',
    goodList:1,
    typeOne:0,
    search:'',
    isBack:true
})

export let mutations = {
    setShowLoading(state,value){
        state.showLoad = value;
    },
    setShowTab(value){
        state.showTab = value
    },
    setLogin(state,value){
        state.isLogin = value
    },
    setUser(state,value){
        state.username = value
    },
    setGoodList(state,value){
        state.goodList = value
    },
    setTypeOne(state,value){
        state.typeOne = value
    },
    setSearch(state,value){
        state.search = value
    },
    setBack(state,value){
        state.isBack = value
    }
    
}

export let getters = {
    getShowLoad(){
        return state.showLoad;
    },
    getShowTab(){
        return state.showTab;
    },
    setLogin(){
        return state.isLogin
    },
    setUser(){
        return state.username
    },
    setGoodList(){
        return state.goodList
    },
    setTypeOne(){
        return state.typeOne
    },
    setSearch(){
        return state.search
    },
    setBack(){
        return state.isBack
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters
})