<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-14 17:28:54
 -->
<template>
    <div id="box">
        <!-- <span v-show="hasjingdian">还没有人拍照，快快来吧</span> -->
        <div style="display:none" >{{typename}}</div>
        <div id="mains" v-for="(obj,index) in objs" :key="index">
            <div id="left">
                <ul>
                    <li>
                        <img :src="obj.fph" alt="">
                    </li>
                </ul>
            </div>
            <div id="right">
                <p style="font-size:13px">{{obj.fname}}</p>
                 <p id="one">{{obj.pingfen}}</p>
                <p id="teo">立即确认</p>
                <div id="bottom">
                    <p>月销：{{obj.sell}}份</p>
                   <span>￥<b>{{obj.price}}</b>起</span>
                </div> 
            </div>
        </div>  
         <!-- <div style="margin-top:10px">
            <div id="left">
                <ul>
                    <li>
                        <img :src="aab.obj" alt="">
                    </li>
                </ul>
            </div>
            <div id="right">
                <h3>{{aab.shih3ya}}</h3>
                <p id="one">{{aab.shiPingf}}</p>
                <p id="teo">立即确认</p>
                <div id="bottom">
                    <p>月销：{{aab.yueXiao}}份</p>
                    <span>￥<b>{{aab.money}}</b>起</span>
                </div>
            </div>
        </div>  -->
        <div id="last">
            <p>查看全部</p>
        </div> 
    </div>  
</template>

<script>
import axios from 'axios';

export default {
  name: 'Tuijian',
  props:['typename'],
  data () {
    return {
        alljingdian:[],
        objs:[],
        currjingdian:null
    }
  },
  computed:{
    hasjingdian(){
        if(!this.currjingdian){
            return true;
        }
        let arr = Object.keys(this.currjingdian);
        return arr.length==0;
        return true;
     }
  },
  created(){
      //从后端获取数据
      axios.get('/sss')
      .then(res=>{
          this.alljingdian=res.data;
          this.objs=this.getBooksByType(this.alljingdian);
          this.currjingdian=this.alljingdian[this.type];
        })
      .catch(err=>{
          console.log(err);
      })

  },
  beforeUpdate(){
      this.objs = this.getBooksByType(this.alljingdian);  
  },
  methods:{
     getBooksByType(data){//根据类型获取数据
         let arr=[];
         for(let i in data){
             if(data[i].pname==this.typename){
                 arr.push(data[i]);
             }
         }
         return arr;
     }
   }
 
}
</script>
<style scoped>
        #box{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            min-height: 100px;
        }
        #left{
            width: 30%;
        }
        #left img{
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
        #right{
            width: 65%;
            margin-top: -100px;
            float: right;
        }
        #right h3{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
        #right #one{
            color: #0099f7;
            float: left;
            font-size: 14px;
            text-indent: 7px;
        }
        #right #teo{
            clear: both;
            width: 60px;
            height: 20px;
            font-size: 12px;
            line-height: 20px;
            color: #0098f7;
            border: 1px solid #67bdf3;
        }
        #bottom p{
            float: left;
            font-size: 11px;
            /* margin-top: 10px; */

        }
        #bottom span{
            margin-top: 7px;
            display: block;
        }
        #bottom b{
            font-size: 17px;
            color: rgb(223, 53, 53);
        }
        #last{
            width: 95%;
            height: 40px;
            margin: 10px auto;
            border: 1px solid rgb(177, 166, 166);
        }
        #last p{
            line-height: 40px;
            text-align: center;
            color: #0098f7;
            font-size: 18px;
        }
</style>
