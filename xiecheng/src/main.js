/*
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-08 21:24:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-12 20:00:36
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  './font/iconfont.css'

Vue.use(ElementUI);
Vue.config.productionTip = false;
Axios.defaults.baseURL = '/api/';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
