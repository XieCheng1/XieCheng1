<!--
 * @Author: your name
 * @Date: 2019-11-08 17:04:47
 * @LastEditTime: 2019-11-12 11:15:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\components\LoginFoter.vue
 -->
<template>
    <div class="box">
        <div class="imgBox">
            <span><img src="../assets/qq.jpg" alt=""></span>
            <span><img src="../assets/weibo.jpg" alt=""></span>
            <span><img src="../assets/weibo1.jpg" alt=""></span>
        </div>
        <p>登录即代表您同意我们的 <a href="#"> 服务协议 </a> 和 <a href="#"> 隐私政策 </a></p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box{
    width: 88%;
    height: .89rem;
    margin: 0 auto;
    padding:30px 0 15px;
    margin-top: 1rem;
}
img{
    width: .39rem;
    height: .39rem;
}
span{
    display: inline-block;
    width: 32%;
    text-align: center;
}
p{
    width: 100%;
    color: #999999;
    font-size: 12px;
    text-align: center;
    margin-top: .17rem;
}
a{
    color: #099FDE;
}
</style>