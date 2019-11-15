/*
 * @Author: yx
 * @Date: 2019-11-08 18:01:56
 * @LastEditors: yx
 * @LastEditTime: 2019-11-14 17:46:55
 * @Description: 
 */
import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index';
import Tourism from '@/pages/Tourism';
import CustService from '@/pages/CustService';
import Positioning from '@/pages/Positioning';

import Des from '@/pages/Des';

import WuyiShan from '@/pages/WuyiShan';
import PhotoPage from '@/pages/PhotoPage';
import DataPage from '@/pages/DataPage';

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
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index/:cid',
      name: 'Index',
      component: Index
    },
    {
      path: '/Tourism',
      name: 'Tourism',
      component: Tourism
    },
    {
      path: '/CustService',
      name: 'CustService',
      component: CustService
    },
    {
      path: '/Positioning',
      name: 'Positioning',
      component: Positioning
    },
    {
      path: '/Des/:id',
      name: 'Des',
      component: Des
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
    },
    {
      path: '/WuyiShan/:id',
      name: 'WuyiShan',
      component: WuyiShan
    },
    {
      path: '/PhotoPage',
      name: 'PhotoPage',
      component: PhotoPage
    },
    {
      path: '/DataPage',
      name: 'DataPage',
      component: DataPage
    } 
  ]
})
