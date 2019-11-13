/*
 * @Author: your name
 * @Date: 2019-11-07 12:14:54
 * @LastEditTime: 2019-11-13 14:23:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import RegisterTwo from '@/pages/RegisterTwo';
import MyNoLogin from '@/pages/MyNoLogin';
import MyLogin from '@/pages/MyLogin';
import Approve from '@/pages/Approve';
import Purse from '@/pages/Purse';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/RegisterTwo/:mg',
      name: 'RegisterTwo',
      component: RegisterTwo,
      props:true
    },
    {
      path: '/MyNoLogin',
      name: 'MyNoLogin',
      component: MyNoLogin
    },
    {
      path: '/MyLogin',
      name: 'MyLogin',
      component: MyLogin
    },
    {
      path: '/Approve',
      name: 'Approve',
      component: Approve
    },
    {
      path: '/Purse',
      name: 'Purse',
      component: Purse
    }      
          
  ]
})
