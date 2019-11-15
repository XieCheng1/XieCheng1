<!--
 * @Author: your name
 * @Date: 2019-11-11 11:31:59
 * @LastEditTime: 2019-11-15 10:28:06
 * @LastEditors: yx
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\pages\MyNoLogin.vue
 -->
<template>
    <div class="box">
      <NoLoginTop></NoLoginTop>
      <NoLoginCenter></NoLoginCenter>
      <NoLoginFot></NoLoginFot>
      <NoLoginPs></NoLoginPs>
      <MyFooter></MyFooter>
    </div>
</template>
<script>
import NoLoginTop from '../components/NoLoginTop';
import NoLoginCenter from '../components/NoLoginCenter';
import NoLoginFot from '../components/NoLoginFot';
import NoLoginPs from '../components/NoLoginPs';
import MyFooter from '../components/MyFooter';

export default {
    name:'MyNoLogin',
    data(){
        return{

        }
    },
    components:{
        NoLoginTop,NoLoginCenter,NoLoginFot,NoLoginPs,MyFooter
    }
}
</script>
<style scoped>
.box{ 
  height: 100%;  
}
</style>