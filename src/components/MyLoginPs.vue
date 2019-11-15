<!--
 * @Author: your name
 * @Date: 2019-11-11 14:51:47
 * @LastEditTime: 2019-11-11 19:05:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\components\NoLoginFot.vue
 -->
<template>
    <div class="box">
        <li>
            <i class="el-icon-office-building"></i>
        </li>
        <li>
            <i class="el-icon-bangzhu"></i>
        </li>
        <li>
            <i class="el-icon-copy-document"></i>
        </li>
        <li>
            <i class="el-icon-attract"></i>
        </li>
    </div>
</template>
<script>
export default {
    name:"MyLoginPs"
}
</script>
<style scoped>
.box{
    margin-top: 0.3rem;
    width: 100%;
    height: 1.1rem;
    padding: .2rem 0;
}
li{
    float: left;
    width: 25%;
    text-align: center;
}
i{
    font-size: 22px;
}
.el-icon-office-building{
    color: brown;
}
.el-icon-bangzhu{
    color: rgb(27, 209, 88);
}
.el-icon-copy-document{
    color: rgb(44, 16, 204);
}
.el-icon-attract{
    color: rgb(173, 6, 123);
}
</style>