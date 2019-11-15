<!--
 * @Author: your name
 * @Date: 2019-11-07 18:11:13
 * @LastEditTime: 2019-11-12 11:21:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\components\Back.vue
 -->
<template>
    <div class="box">
        <!-- 后退箭头 -->
        <ul>
            <li class="oneLi" @click="back()">
                <i class="el-icon-arrow-left"></i>
            </li>
            <li class="twoLi">
                <i class="el-icon-s-operation"></i>
            </li>
        </ul>
        <h1>登录携程，开启旅行</h1>
        <div>
            <button class="but1"><router-link to="/Login">登录/注册</router-link></button>
            <button class="but2"><router-link to="/MyLogin">手机号查单</router-link></button>
        </div>
    </div>
</template>

<script>

export default {
    name:"NoLoginTop",
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
    height: 100%;
    background-image: url(../assets/Mytop.png);
}
ul{
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
h1{
    width: 100%;
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
}
button{
    margin-top: .2rem;
    width: 1.26rem;
    height: .36rem;
    border: none;
    margin-bottom: .2rem;
}
.but1{
    background-color: #ff9a14;
    border-radius: .5rem;
    color: #FFFFFF;
    margin-left: 30px;
}
.but2{
    background: rgba(255,255,255,0.15);
    border-radius: .5rem;
    margin-left: 40px;
    border: 1px solid rgba(255,255,255,0.5);
    color: #FFFFFF;
}
.el-icon-s-operation{
    font-size: 25px;
}
a{
    color: #FFFFFF;
}
</style>