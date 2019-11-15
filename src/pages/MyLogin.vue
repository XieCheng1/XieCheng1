<!--
 * @Author: your name
 * @Date: 2019-11-11 11:31:59
 * @LastEditTime: 2019-11-11 17:54:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\pages\MyNoLogin.vue
 -->
<template>
    <div class="box">
      <MyLoginTop></MyLoginTop>
      <MyLoginCenter></MyLoginCenter>
      <MyLoginFot></MyLoginFot>
      <MyLoginPs></MyLoginPs>
    </div>
</template>
<script>
import MyLoginTop from '../components/MyLoginTop';
import MyLoginCenter from '../components/MyLoginCenter';
import MyLoginFot from '../components/MyLoginFot';
import MyLoginPs from '../components/MyLoginPs';

export default {
    name:'MyLogin',
    data(){
        return{

        }
    },
    components:{
        MyLoginTop,MyLoginCenter,MyLoginFot,MyLoginPs
    }
}
</script>
<style scoped>
.box{ 
  height: 100%;  
}
</style>