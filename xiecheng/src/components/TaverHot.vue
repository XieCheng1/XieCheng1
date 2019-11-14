<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-11 14:30:20
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-14 01:07:15
 -->
<template>
    <div id="boxs">
        <ul>
            <li v-for="(obj,index) in objs" :key="index">
                <img :src="obj.ph" alt="">  
                <p>{{obj.gname1}}</p>
                <h4>{{obj.gname2}}</h4>   
            </li>
        </ul>
    </div>
    
</template>
<script>
import axios from 'axios';
export default {
    name:'TaverHot',
    data(){
        return{
           objs:[],
           alljingdian:[],
           currjingdian:null
        }
    },
    created(){
        //从后端获取数据
        axios('/lvpai')
        .then(res=>{
           this.alljingdian=res.data;
           console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },
     methods:{
        // 获得上面的那部分应该存放的数据，此时后端返回的是数字1
        getNews(data){
            let arr=[];
            for(let i in data){
                if(data[i].ds==1){
                    arr.push(data[i]);
                }
            }
        }
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
        width: 200px;
        margin-right: 10px;
        flex-shrink: 0;
        position: relative;
    }
    img{
        width: 90%;
        height: 90%;
    }
    li p{
        position: absolute;
        bottom: 48px;
        left: 10px;
        font-size: 20px;
        font-weight: 900;
       color: rgb(250, 240, 240);
    }
    li h4{
        position: absolute;
        left: 10px;
        bottom: 20px;
        font-size: 18px;
        color: aliceblue;
        background-color: #666;
    }
</style>
