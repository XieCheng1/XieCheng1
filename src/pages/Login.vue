<!--
 * @Author: your name
 * @Date: 2019-11-07 18:09:09
 * @LastEditTime: 2019-11-08 17:10:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\pages\Login.vue
 -->
<template>
    <div class="box">
      <Back></Back>
      <Center></Center>  
      <LoginFoter></LoginFoter>
    </div>
</template>
<script>
import Back from '../components/Back';
import Center from '../components/Center';
import LoginFoter from '../components/LoginFoter';
export default {
    name:'HelloWorld',
    data(){
        return{

        }
    },
    components:{
        Back,Center,LoginFoter
    }
}
</script>
<style scoped>
.box{ 
  height: 100%;  
}
</style>