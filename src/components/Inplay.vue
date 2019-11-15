<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-11 14:30:20
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-13 23:39:04
 -->
<template>
    <div id="boxs">
        <ul>
            <li v-for="(obj,index) in objs" :key="index">
                <img :src="obj.ph" alt="">  
                <p>景点</p>
                <h4>{{obj.name}}</h4>   
            </li>
             <!-- <li>
                <img :src="objs.objsrc" alt="">  
                <p>景点</p>
                <h4>{{objs.shiname}}</h4>   
            </li>
             <li>
                <img :src="objs.objsrc" alt="">  
                <p>景点</p>
                <h4>{{objs.shiname}}</h4>   
            </li>
             <li>
                <img :src="objs.objsrc" alt="">  
                <p>景点</p>
                <h4>{{objs.shiname}}</h4>   
            </li>
             <li>
                <img :src="objs.objsrc" alt="">  
                <p>景点</p>
                <h4>{{objs.shiname}}</h4>   
            </li>
             <li>
                <img :src="objs.objsrc" alt="">  
                <p>景点</p>
                <h4>{{objs.shiname}}</h4>   
            </li> -->
        </ul>
    </div>
    
</template>
<script>
// import axios from 'axios';
export default {
    name:'Inplay',
    data(){
        return{
           objs:{

           }
        }
    },
    methods:{
        
    },
    created(){
        //从后端获取数据
        fetch('/api/jingqu')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.objs=data;
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
</script>
<style scoped>
    #boxs{
        width: 100%;
        margin-bottom: 10px;
    }
    ul{
        width: 100%;
        display: flex;
        overflow-x:auto;
        justify-content: space-between;
    }
    li{
        width: 150px;
        height: 200px;
        margin-right: 10px;
        flex-shrink: 0;
        position: relative;
    }
    img{
        width: 100%;
        height: 80%;
    }
    li p{
        position: absolute;
        top: 5px;
        left: 5px;
        width: 40px;
        height: 20px;
        background-color: rgb(250, 240, 240);
    }
    li h4{
        font-size: 15px;
    }
</style>
