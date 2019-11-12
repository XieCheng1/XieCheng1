<!--
 * @Author: your name
 * @Date: 2019-11-07 18:09:09
 * @LastEditTime: 2019-11-11 19:42:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\pages\Login.vue
 -->
<template>
    <div class="box">
      <MyLoginTop></MyLoginTop>
      <ApproveTop></ApproveTop>
      
    </div>
</template>
<script>
import MyLoginTop from '../components/MyLoginTop';
import ApproveTop from '../components/ApproveTop';


export default {
    name:'Approve',
    data(){
        return{

        }
    },
    components:{
        MyLoginTop,ApproveTop
    }
}
</script>
<style scoped>
.box{ 
  height: 100%;  
}
</style>