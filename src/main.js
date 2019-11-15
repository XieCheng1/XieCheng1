/*
 * @Author: yx
 * @Date: 2019-11-08 18:01:56
 * @LastEditors: yx
 * @LastEditTime: 2019-11-15 10:15:13
 * @Description: 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css'; 
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import axios from 'axios';
import  './font/iconfont.css';



Vue.use(MintUI);
Vue.use(ElementUI);

Vue.config.productionTip = false
axios.defaults.baseURL = '/api/'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
