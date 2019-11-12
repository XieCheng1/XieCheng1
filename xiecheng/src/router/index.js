/*
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-07 20:39:44
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-11 20:08:01
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WuyiShan from '@/page/WuyiShan';
import PhotoPage from '@/page/PhotoPage';
import DataPage from '@/page/DataPage';



Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
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
