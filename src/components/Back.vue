<!--
 * @Author: your name
 * @Date: 2019-11-07 18:11:13
 * @LastEditTime: 2019-11-12 11:19:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\components\Back.vue
 -->
<template>
    <div class="box">
        <!-- 后退箭头 -->
        <li class="oneLi" @click="back()">
            <i class="el-icon-arrow-left"></i>
        </li>
        <li class="twoLi">
            <router-link to="/Register">注册</router-link>
        </li>
    </div>
</template>

<script>

export default {
    name:"Back",
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
}
.oneLi{
    float: left;
    width: .44rem;
    height: 100%;
    font-size: 25px;
    font-weight:900;
}
.twoLi{
    float: right;
    width: .5rem;
    height: 100%;
    font-size: 15px;
    color: #099FDE;
}

</style>