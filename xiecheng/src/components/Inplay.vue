<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-11 14:30:20
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-11 15:12:10
 -->
<template>
    <div id="boxs">
        <ul>
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
        fetch('http://localhost:3000/Inplay')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.objs=data[0];

            console.log(data[0])
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
        margin-right: 10px;
        flex-shrink: 0;
        position: relative;
    }
    img{
        width: 100%;
    }
    li p{
        position: absolute;
        top: 10px;
        left: 10px;
        width: 40px;
        height: 20px;
        background-color: rgb(250, 240, 240);
    }
    li h4{
        font-size: 15px;
    }
</style>
