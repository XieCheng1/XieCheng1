<!--
 * @Descripttion: "导航栏"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-14 00:23:05
 -->
 
<template>
    <div class="box">
        <ul id="searchBar">  
          <li><i class="el-icon-location-outline"></i>预订</li>
          <li><i class="el-icon-location-outline"></i>玩法</li>   
          <li><i class="el-icon-location-outline"></i>点评</li>   
          <li><i class="el-icon-location-outline"></i>攻略</li>   
          <li><i class="el-icon-location-outline"></i>推荐</li>   
        </ul>
    </div>
</template>

<script>

import Axios from 'axios';
export default {
  name: 'Nav',
  data () {
    return {
        navs:{},
    }
  
},
  mounted () {//给window添加一个滚动滚动监听事件
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () { //改变元素#searchBar的top值
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var offsetTop = document.querySelector('#searchBar').offsetTop;
      if(scrollTop>=0){
        offsetTop=0;
        document.querySelector('#searchBar').style.top = offsetTop+'px';
      }else{
        document.querySelector('#searchBar').style.top = '0';
      }
  },
},
  destroyed () {//离开该页面需要移除这个监听的事件
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
<style scoped>
ul{
  width: 100%;
  height: 30px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  position: sticky;
  z-index: 8;

}
li{
  /* z-index: 2; */
  /* top: 580px; */
  font-size: 18px;
}
i{
  color: blue;
  opacity: 0;
}
li:hover i{
    opacity: 1;
    color: blue;
    font-size: 24px;
}
li:hover {
    color: blue;
    font-size: 22px;
}
</style>

