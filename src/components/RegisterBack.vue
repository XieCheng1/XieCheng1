<!--
 * @Author: your name
 * @Date: 2019-11-08 19:22:19
 * @LastEditTime: 2019-11-12 11:22:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\components\RegisterBack.vue
 -->
<template>
    <div class="box">
         <!-- 后退箭头 -->
        <li class="oneLi" @click="back()">
            <i class="el-icon-arrow-left"></i>
        </li>
        <li class="twoLi">
            <p>注册</p>
        </li>
    </div>    
</template>

<script>

export default {
    name:"RegisterBack",
    data(){
        return {

        }
    },
    methods:{
      back(){
          this.$router.go(-1);
      }
  }
}
</script>
<style scoped>
.box{
    width: 100%;
    height: .44rem;
}
li{
    text-align: center;
    line-height: .44rem;
    list-style: none;
    float: left;
}
.oneLi{
    width: .44rem;
    height: 100%;
    font-size: 25px;
    font-weight:900;
    color: #099FDE;
}
.twoLi{
    width: .5rem;
    height: 100%;
    font-size: 15px;  
    margin-left: 30%;
}

</style>