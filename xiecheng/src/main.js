/*
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-08 21:24:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-09 10:11:08
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  './font/iconfont.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.use(ElementUI);
