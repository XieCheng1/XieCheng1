<!--
 * @Author: your name
 * @Date: 2019-11-07 20:39:16
 * @LastEditTime: 2019-11-08 21:16:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\components\center.vue
 -->
<template>
    <div class="box">
        <h2>携程账号登录</h2>
        <div class="centerBox">
            <li class="oneLi">
                <input type="text" placeholder="国内手机号/用户名/邮箱/卡号">
            </li>
            <li class="twoLi">
                <input type="password" placeholder="登录密码">
                <span>找回密码</span>
            </li>
            <button>登录</button>
            <li class="thereLi">
                <a href="">手机快捷登录</a>
                <a href="">境外手机登录</a>
            </li>
        </div>
    </div>
</template>
<script>
export default {
    name:"Center",
    data(){
        return {
            
        }
    }
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 3.89rem;
}
h2{
    display: inline-block;
    margin-top: .5rem;
    width: 100%;
    text-align: center;
    font-size: .25rem;
}
.centerBox{
    margin-top: .5rem;
}
.oneLi{
    width: 88%;
    background-color: pink;
    margin: 0 auto;
    border-bottom: 1px solid rgb(228, 211, 211);
}
.oneLi input{
    line-height: .24rem;
    font-style: 16px;
    font-weight: 800;
    width: 100%;
    border: none;
    height: .58rem;
    outline:0; 
}
.twoLi{
    width: 88%;
    margin: 0 auto;
    border-bottom: 1px solid rgb(228, 215, 215);
}
.twoLi input{
    line-height: .24rem;
    font-style: 16px;
    font-weight: 800;
    width: 70%;
    border: none;
    height: .58rem;
    outline:0; 
}
span{
    color: #099FDE;
    font-size: 13px;
}
button{
    display: block;
    width: 90%;
    height: .44rem;
    margin: 0 auto;
    margin-top: .5rem;
    border-radius: .05rem;
    border: none;
    background-color: #ff9a14;
    font-size: 17px;
    color: #fff;
}
.thereLi{
    width: 90%;
    margin: 0 auto;
    margin-top: 20px; 
}
a:nth-child(1){
    float: left;
}
a:nth-child(2){
    float: right;  
}
a{
    color: #666666;
    font-size: 15px;
}
</style>