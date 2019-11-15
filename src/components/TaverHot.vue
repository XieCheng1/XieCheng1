<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-11 14:30:20
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-14 16:19:33
 -->
<template>
    <div id="boxs">
        <ul>
            <li v-for="(obj,index) in arr" :key="index">
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
           objs:{},
           arr:[]//此处的arr是用于将循环出符合条件的值放在一个数组中，到时候循环这个数组就好
        }
    },
    created(){
        //从后端获取数据
        axios('/lvpai')
        .then(res=>{ 
           this.objs=res.data;
           for(let i=0;i<this.objs.length;i++){
               if(this.objs[i].ds==1){
                   this.arr.push(this.objs[i])
               }
           }
        })
        .catch(err=>{
            console.log(err)
        })
    },
     methods:{
        // 获得上面的那部分应该存放的数据，此时后端返回的是数字1  
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
