<!--
 * @Author: your name
 * @Date: 2019-11-07 18:11:13
 * @LastEditTime: 2019-11-12 11:20:37
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
                <i class="el-icon-chat-line-square"></i>
            </li>
        </ul>
        <h1>尊贵的会员</h1>
        
        <ol>
            <div class="headerImg">
                <img src="../assets/headImg.png">
            </div>
            <li>
                <p class="leftP">
                    <i class="el-icon-medal"></i>
                    我的社区
                </p>
                <p class="rightP">
                    <i class="el-icon-user"></i>
                        领会员福利
                </p>    
            </li>
        </ol>
        <div class="fot">
            <li>
                <span><i class="el-icon-tickets"></i></span>
                <p>全部订单</p>
            </li>
            <li>
                <span><i class="el-icon-printer"></i></span>
                <p>待付款</p>
            </li>
            <li>
                <span><i class="el-icon-stopwatch"></i></span>
                <p>待出行</p>
            </li>
            <li>
                <span><i class="el-icon-s-comment"></i></span>
                <p>待评价</p>
            </li>
        </div>
    </div>
</template>

<script>

export default {
    name:"MyLoginTop",
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
    height: 2rem;
    background-image: url(../assets/Mytop.png);
}
ul{
    width: 100%;
    height: .44rem;
}
ul li{
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
    margin-top: .2rem;
    width: 100%;
    text-align: center;
    color: #FFFFFF;
    font-size: 17px;
    margin-bottom: .1rem;
}
.leftP{
    background: rgba(17,166,255,0.1);
    color: #5e8aa6;
}
.rightP{
    background: rgba(247,148,100,0.15);
    color: #967363;
}
.headerImg{
    float: left;
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: -70%;
    left: 5%;
}
ol{
    width: 100%;
    float: left;
    height: .48rem;
    position: relative;
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem;
    background-color: #fff;
}
ol li{
    float: left;
    margin-left: 30%;
}
ol p{
    float: left;
    margin-left: 0.1rem;
    font-size: 12px;
    width: 0.93rem;
    height: 0.23rem;
    margin-top: .13rem;
    line-height: .23rem;
    text-align: center;
    border-radius: .1rem;
}
.fot li{
    float: left;
    padding: .15rem 0;
    text-align: center;
    background-color: #fff;
    width: 25%;
}
.fot p{
    font-size: 13px;
    color: #333333;
}
.fot i{
    font-size: 22px;
}
i{
    font-size: 14px;
}
.el-icon-arrow-left{
    font-size: 20px;
    color: #FFFFFF;
}
img{
    width: .7rem;
    height: .7rem;
}
.el-icon-chat-line-square{
    font-size: 25px;
    color: #FFFFFF;
}
a{
    color: #FFFFFF;

}
.el-icon-tickets{
    color: rgb(211, 180, 7);
}
.el-icon-printer{
    color: rgb(97, 190, 21);
}
.el-icon-stopwatch{
    color: rgb(22, 189, 231);
}
.el-icon-s-comment{
    color: rgb(224, 26, 214);
}
</style>