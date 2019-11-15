<!--
 * @Descripttion: "导航栏"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-14 17:14:43
 -->
 
<template>
    <div class="box">
        <ul id="searchBar">  
          <li :class="isactive==index?'blue':''" @click="clk(index)" v-for="(item,index) in lis" :key="index"><i class="el-icon-location-outline"></i>{{item.name}}</li>
          <!-- <li><i class="el-icon-location-outline"></i>玩法</li>   
          <li><i class="el-icon-location-outline"></i>点评</li>   
          <li><i class="el-icon-location-outline"></i>攻略</li>   
          <li><i class="el-icon-location-outline"></i>推荐</li>    -->
        </ul>
    </div>
</template>

<script>

import Axios from 'axios';
export default {
  name: 'Nav',
  data () {
    return {
        lis:[
           {"name":"预订"},
           {"name":"玩法"},
           {"name":"点评"},
           {"name":"攻略"},
           {"name":"推荐"}
        ],
        navs:{},
        isactive:0
    }
  
},
  mounted () {//给window添加一个滚动滚动监听事件
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    clk(index){
        this.isactive=index;
    },
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
.blue{
  color: blue;
  font-size: 24px;
}

</style>

