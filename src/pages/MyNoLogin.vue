<!--
 * @Author: your name
 * @Date: 2019-11-11 11:31:59
 * @LastEditTime: 2019-11-11 15:25:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\pages\MyNoLogin.vue
 -->
<template>
    <div class="box">
      <NoLoginTop></NoLoginTop>
      <NoLoginCenter></NoLoginCenter>
      <NoLoginFot></NoLoginFot>
      <NoLoginPs></NoLoginPs>
    </div>
</template>
<script>
import NoLoginTop from '../components/NoLoginTop';
import NoLoginCenter from '../components/NoLoginCenter';
import NoLoginFot from '../components/NoLoginFot';
import NoLoginPs from '../components/NoLoginPs';

export default {
    name:'MyNoLogin',
    data(){
        return{

        }
    },
    components:{
        NoLoginTop,NoLoginCenter,NoLoginFot,NoLoginPs
    }
}
</script>
<style scoped>
.box{ 
  height: 100%;  
}
</style>