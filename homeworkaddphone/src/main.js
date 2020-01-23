import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入vuex
import store from "./store/store"
// 引入iview框架
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

//  使用viewui
Vue.use(ViewUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
