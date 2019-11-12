<!--
 * @Descripttion: "导航栏"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-11 09:17:51  -->
 
<template>
    <div class="box">
        <ul>     
          <li @click="xianshou(current)" name='first'><i class="el-icon-location-outline" v-show="isShow"></i>预订</li>
          <li @click="xianshou(current)" name='second'><i class="el-icon-location-outline" v-show="!isShow"></i>玩法</li>
          <li @click="xianshou(current)" name='third'><i class="el-icon-location-outline" v-show="!isShow"></i>点评</li>
          <li @click="xianshou(current)" name='fourth'><i class="el-icon-location-outline" v-show="!isShow"></i>攻略</li>
          <li @click="xianshou(current)" name='fiveth'><i class="el-icon-location-outline" v-show="!isShow"></i>推荐</li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'Nav',
  data () {
    return {
      active:'first',
      isShow:true,
    }
  },
  methods:{
     xianshou(tab,event){
       this.isShow=!this.isShow;
     }
  }
}
</script>
<style scoped>
ul{
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
</style>

