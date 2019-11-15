<!--
 * @Author: your name
 * @Date: 2019-11-11 12:07:06
 * @LastEditTime: 2019-11-11 15:22:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\components\NoLoginCenter.vue
 -->
<template>
    <div class="box">
        <div class="boxTop">
            <li class="Olis"><i class="el-icon-suitcase"></i></li>
            <li class="Tlis">
                <p>钱包</p>
                <p>
                    <span>礼品卡</span>
                    <span>现金</span>
                    <span>返现</span>
                </p>
            </li>
        </div>
        <div class="boxBtm">
            <li>
                <p>
                    <i class="el-icon-shopping-bag-1"></i>
                    优惠券
                    <span>领券</span>
                </p>
            </li>
            <li>
                <p>
                    <i class="el-icon-present"></i>
                    积分
                    <span>兑好礼</span>
                </p>
            </li>
            <li>
                <p>
                    <i class="el-icon-thumb"></i>
                    拿去花
                    <span>分期付款</span>
                </p>
            </li>
        </div>
    </div>
    
</template>
<script>
export default {
   name:"NoLoginCenter", 
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 1.43rem;
    margin: 0 auto;
}
.boxTop{
    width: 100%;
    height: .48rem;
    padding:.11rem .15rem;
    border-bottom: 1px solid rgb(240, 237, 237);
    
}
.Olis{
    font-size: 20px;
    float: left;
}
p{
    font-size: 16px;
    color: #333333;
}
span{
    color: #999999;
    font-size: 12px;
    margin-top: .1rem;
}
.Tlis{
    float: left;
    margin-left: .1rem;
}
.boxBtm{
    width: 100%;
    height: .43rem;
    
}
.boxBtm li{
    width: 33%;
    float: left;
    text-align: center;
    padding: .15rem 0 0;
    border-right: 1px solid rgb(240, 237, 237);
}
.boxBtm p{
    font-size: 15px;
}
.boxBtm span{
    display: block;
}
i{
    font-size: 20px;
}
</style>