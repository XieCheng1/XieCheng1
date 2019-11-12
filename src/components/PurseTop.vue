<!--
 * @Author: your name
 * @Date: 2019-11-08 19:22:19
 * @LastEditTime: 2019-11-12 11:22:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\components\RegisterBack.vue
 -->
<template>
    <div class="box">
         <!-- 后退箭头 -->
         <div class="boxTop">
             <li class="oneLi" @click="back()">
                <i class="el-icon-arrow-left"></i>
            </li>
            <li class="twoLi">
                <p>我的钱包</p>
            </li>
         </div>
        <div class="boxs">                       
            <li>
                <span>0.00</span>
                <p>返现(元)</p>
            </li>
            <li>
                <span>0.00</span>
                <p>现金金额(元)</p>
            </li>
            <li>
                <span>0.00</span>
                <p>礼品卡(元)</p>
            </li>
        </div>
        <div class="boxBtm">
            <li><i class="el-icon-suitcase-1"></i><p>银行卡</p></li>
            <li><i class="el-icon-s-custom"></i><p>银联付款码</p></li>
        </div>
        <li class="liOne">
            <i class="el-icon-message-solid"></i>
            为资金安全，请实名认证</li>
    </div>    
</template>

<script>

export default {
    name:"PurseTop",
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
    background-image: url(../assets/Mytop.png);
}
.boxTop{
    width: 100%;
    height: .44rem;
}
.boxTop li{
    text-align: center;
    line-height: .44rem;
    list-style: none;
    float: left;
}
.el-icon-arrow-left{
    color: #ffffff;
}
.oneLi{
    width: .44rem;
    height: 100%;
    font-size: 25px;
    font-weight:900;
    color: #099FDE;
}
.twoLi{
    width: .9rem;
    height: 100%;
    font-size: 18px;  
    margin-left: 30%;
    color: #ffffff;
}
.boxs{
    width:100%;
    height: .64rem;
}
.boxs p{
    color: #fff;
}
.boxs span{
    color: #fff;
}
.boxs li{
    width: 33%;
    text-align: center;
    float: left;
    line-height: .3rem;
}
.boxBtm{
    width: 95%;
    height: 1rem;
    margin: 0 auto;
    background-color: #fff;
}
.boxBtm li{
    margin-top: .1rem;
    width: 50%;
    float: left;
    text-align: center;
    line-height: .3rem;
}
.boxBtm i{
    font-size: 24px;
    color: blue;
}
.liOne{
    background-color: #fef9d9;
    color: #e0aa64;
    text-align: center;
}
.el-icon-message-solid{
    font-size: 18px;
}
</style>