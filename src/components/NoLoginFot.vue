<!--
 * @Author: your name
 * @Date: 2019-11-11 14:51:47
 * @LastEditTime: 2019-11-11 15:19:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\components\NoLoginFot.vue
 -->
<template>
    <div class="box">
        <li>
            常用信息
            <p>
                <span>旅客/地址/发票抬头</span>
                <i class="el-icon-arrow-right"></i>
            </p>
        </li>
        <li>我要收藏
            <p>
                <span>降价产品提醒</span>
                <i class="el-icon-arrow-right"></i>
            </p>
        </li>
        <li>浏览历史
            <p>
                <span>近15天访问记录</span>
                <i class="el-icon-arrow-right"></i>
            </p>
        </li>
        <li>我要合作
            <p>
                <span>供应商代理加盟/代理合作</span>
                <i class="el-icon-arrow-right"></i>
            </p>
        </li>
    </div>
</template>
<script>
export default {
    name:"NoLoginFot"
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 2rem;
    padding-left: .25rem;
    margin-top: .21rem;
}
li{
    width: 91%;
    height: 25%;
    font-size: 16px;
    color: #333333;
    line-height: .48rem;

}
p{
    float: right;
}
span{
    font-size: 12px;
    color: #999999; 
}
</style>