<!--
 * @Author: your name
 * @Date: 2019-11-08 19:20:03
 * @LastEditTime: 2019-11-08 21:03:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\pages\Register.vue
 -->
<template>
    <div class="box">
        <RegisterBack></RegisterBack>
        <RegisterInput></RegisterInput>
    </div>
</template>

<script>
import RegisterBack from '../components/RegisterBack';
import RegisterInput from '../components/RegisterInput';

export default {
    name:"Register",
    data(){
        return {
            
        }
    },
     components:{
        RegisterBack,RegisterInput
    }
}
</script>
<style scoped>
.box{ 
  height: 100%;  
}
</style>