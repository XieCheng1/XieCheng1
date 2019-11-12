<!--
 * @Author: your name
 * @Date: 2019-11-07 18:11:13
 * @LastEditTime: 2019-11-11 20:23:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\components\Back.vue
 -->
<template>
    <div class="box">
        <h1>请完善您的个人信息</h1>
        <li>
            <p>请输入姓名</p>
            <input type="text">
        </li>
        <li>
            <p>请输入身份证号码</p>
            <input type="text">
        </li>
        <li>
            <p>请绑定银行卡号</p>
            <input type="text">
        </li>
        <button><router-link to="/Purse">认证</router-link></button>
    </div>
</template>

<script>

export default {
    name:"ApproveTop",
    data(){
        return {
            
        }
    }
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 80%;
    /* background-image: url(../assets/Mytop.png); */
    padding: 20px 0;
    /* margin-top: .8rem; */
}
h1{
    font-size: 18px;
    color: #333333;
    text-align: center;
}
li{
    text-align: center;
}
p{
    margin: .1rem 0;
    font-size: 16px;
    color: rgb(1, 14, 26);
}
input{
    width: 60%;
    height: .3rem;
}
button{
    display: block;
    width: 90%;
    height: .44rem;
    margin: 0 auto;
    margin-top: .3rem;
    border-radius: .05rem;
    border: none;
    background-color: #ff9a14;
    font-size: 17px;
    color: #fff;
}
</style>