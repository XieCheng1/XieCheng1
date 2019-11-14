<!--
 * @Description: weizhi
 * @Author: 是丽丽呀
 * @Date: 2019-11-11 15:32:08
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-14 00:01:57
 -->
<template>
    <div id="box">
        <el-tabs id="local" v-model="activeName" @tab-click="handleClick" style="width:200px;  margin:0 auto">
            <el-tab-pane label="关注" name="first"></el-tab-pane>
            <el-tab-pane label="发现" name="second"></el-tab-pane>
            <el-tab-pane label="西安" name="third"></el-tab-pane>
        </el-tabs>
        <!-- <div style="display:inline-block">
           <i class=" el-icon-chat-line-square"></i>
        </div> -->
        <div id="search">
            <el-button type="primary" icon="el-icon-search" style="background:rgb(252, 248, 248);border:none;color:black">试试搜优质旅拍PK赛</el-button>
        </div>
        <div id="tiGong">
            <p><span>{{objs.num}}</span>人为你提供旅拍灵感</p>
        </div>
    </div>
</template>
<script>

export default {
    name:'Weizhi',
    data(){
        return{
            activeName: 'second',
            objs:{
                
            }
        }
    },
    methods:{
        handleClick(tab, event){
        // console.log(tab, event);
      }
    },
      created(){
        //从后端获取数据
        fetch('/api/lvpai')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.objs=data[0];
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
</script>
<style scoped>
#box{
    background-color: #fff;
}
#local{
    width: 70%;
    margin: 0 auto;
}
#search{
    width: 95%;
    height: 40px;
    border-radius: 10px;
    margin: 0 auto;
    background-color: rgb(252, 248, 248);
}
#tiGong{
    line-height: 100px;

}
#tiGong span{
    font-size: 32px;
    color: #32d0c1;
}
</style>