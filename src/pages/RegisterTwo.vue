<!--
 * @Author: your name
 * @Date: 2019-11-08 19:20:03
 * @LastEditTime: 2019-11-11 10:36:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\pages\Register.vue
 -->
<template>
    <div class="box">
        <RegisterBack></RegisterBack>
        <InputTwo></InputTwo>
    </div>
</template>

<script>
import RegisterBack from '../components/RegisterBack';
import InputTwo from '../components/InputTwo';

export default {
    name:"RegisterTwo",
    data(){
        return {
            
        }
    },
     components:{
        RegisterBack,InputTwo
    }
}
</script>
<style scoped>
.box{ 
  height: 100%;  
}
</style>