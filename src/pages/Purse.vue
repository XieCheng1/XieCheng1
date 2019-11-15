<!--
 * @Author: your name
 * @Date: 2019-11-07 18:09:09
 * @LastEditTime: 2019-11-12 09:51:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\pages\Login.vue
 -->
<template>
    <div class="box">
      <PurseTop></PurseTop>
      <PurseCenter></PurseCenter>
      
    </div>
</template>
<script>
import PurseTop from '../components/PurseTop';
import PurseCenter from '../components/PurseCenter';


export default {
    name:'Purse',
    data(){
        return{

        }
    },
    components:{
        PurseTop,PurseCenter
    }
}
</script>
<style scoped>
.box{ 
  height: 100%;  
}
</style>