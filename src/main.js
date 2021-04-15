import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import ElementUI from 'element-ui';
import loadMore from './plugins/loadMore.js'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/common.css'
import './assets/animate.css'
import Bus from './plugins/bus.js'

Vue.use(Bus)
Vue.use(ElementUI);
Vue.use(loadMore);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
