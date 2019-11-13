<!--
 * @Author: your name
 * @Date: 2019-11-08 19:20:03
 * @LastEditTime: 2019-11-13 14:49:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\pages\Register.vue
 -->
<template>
    <div class="box">
        <RegisterBack></RegisterBack>
        <InputTwo :Msg="this.$route.params.mg"></InputTwo>
    </div>
</template>

<script>
import RegisterBack from '../components/RegisterBack';
import InputTwo from '../components/InputTwo';

export default {
    name:"RegisterTwo",
    props:['mg'],
    data(){
        return {
            
        }
    },
    //取地址栏的手机号
    // mounted(){
    //     console.log(this.$route.params.mg);
    // },
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