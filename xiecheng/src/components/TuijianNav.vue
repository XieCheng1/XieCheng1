<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-14 00:33:26
 -->
<template>
    <div class="box">
        <ul>
            <!-- <li :v-bind="shicolor" @click="changetype(item.name)">一日游</li>
            <li :v-bind="shicolor" @click="changetype(item.name)">团队游</li>
            <li :v-bind="shicolor" @click="changetype(item.name)">当地游玩</li>
            <li :v-bind="shicolor" @click="changetype(item.name)">酒店+门票</li>
            <li :v-bind="shicolor" @click="changetype(item.name)">当地向导</li> -->

             <li :v-bind="shicolor" @click="changetype(item.name)" v-for="(item,index) in types" :key="index">{{item.name}}</li>
        </ul>
         <div class="contentBox">
             <Tuijian :typename="currtype"></Tuijian>
         </div>
    </div>  
</template>

<script>
import Tuijian from './Tuijian';
import Axios from 'axios';

export default {
  name: 'TuijianNav',
  data () {
    return {
      shicolor:`
            background: rgb(143, 217, 247);
            color: aliceblue;
            font-weight: 500;
        `,
        types:[],
        currtype:'',
    }
  },
  components:{
      Tuijian
  },
  created(){
    Axios.get('/types')
    .then((response)=> {
        this.types = response.data;
        this.currtype = this.types[0].name;//把拿到的类型的第一个赋给当前类型。
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  methods:{
      iscolor(){
          this.li.style=shicolor;
      },
      changetype(typename){
          this.currtype = typename;
      }
  }
}
</script>
<style scoped>
    ul{
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 35px;
        overflow-x: auto;
    }
    li:first-child{
        margin-left: 154px;
    }
    li{
        width: 80px;
        height: 35px;
        border: 1px solid rgb(182, 178, 178);
        border-radius: 8px;
        line-height: 35px;
        margin-right:20px ;
        flex-shrink: 0;
    }
    li:hover{
        border: 2px solid blue;
        color: blue;
    }
    .contentBox{
        margin-top: 15px;
    }
</style>
