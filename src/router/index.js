/*
 * @Author: yx
 * @Date: 2019-11-08 18:01:56
 * @LastEditors: yx
 * @LastEditTime: 2019-11-12 10:42:17
 * @Description: 
 */
import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index';
import Tourism from '@/pages/Tourism';
import CustService from '@/pages/CustService';
import Positioning from '@/pages/Positioning';

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
      path: '/Index/:name',
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
    }
  ]
})