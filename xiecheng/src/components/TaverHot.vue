<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-11 14:30:20
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-11 17:00:58
 -->
<template>
    <div id="boxs">
        <ul>
            <li>
                <img :src="objs.objsrc" alt="">  
                <p>{{objs.ships}}</p>
                <h4>{{objs.hotname}}</h4>   
            </li>
             <li>
                <img :src="objs.objsrc" alt="">  
                <p>{{objs.ships}}</p>
                <h4>{{objs.hotname}}</h4>    
            </li>
             <li>
                <img :src="objs.objsrc" alt="">  
               <p>{{objs.ships}}</p>
                <h4>{{objs.hotname}}</h4>   
            </li>
             <li>
                <img :src="objs.objsrc" alt="">  
                <p>{{objs.ships}}</p>
                <h4>{{objs.hotname}}</h4>   
            </li>
             <li>
                <img :src="objs.objsrc" alt="">  
               <p>{{objs.ships}}</p>
                <h4>{{objs.hotname}}</h4>   
            </li>
             <li>
                <img :src="objs.objsrc" alt="">  
                <p>{{objs.ships}}</p>
                <h4>{{objs.hotname}}</h4>    
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
            this.objs=data[0]
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
        width: 200px;
        margin-right: 10px;
        flex-shrink: 0;
        position: relative;
    }
    img{
        width: 100%;
    }
    li p{
        position: absolute;
        bottom: 40px;
        left: 10px;
        font-size: 20px;
        font-weight: 900;
       color: rgb(250, 240, 240);
    }
    li h4{
        position: absolute;
        left: 10px;
        bottom: 10px;
        font-size: 18px;
        color: aliceblue;
        background-color: #666;
    
    }
</style>
