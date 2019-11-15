<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-14 17:27:40
 -->
<template>
    <div class="box">
        <ul>
             <li :class="isactive==index?'blue':''" @touchstart='clk(index)' @click="changetype(item.name)" v-for="(item,index) in types" :key="index">{{item.name}}</li>
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
 
        types:[],
        currtype:'',
        isactive:0
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
      clk(index){
         this.isactive=index;
      },
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
        justify-content: space-between;
        width: 100%;
        height: 35px;
        overflow-x: auto;
    }
    li:first-child{
        margin-left: 7px;
    }
    li{
        /* width: 80px; */
        border: 1px solid rgb(182, 178, 178);
        border-radius: 8px;
        line-height: 35px;
        margin-right:20px ;
        flex-shrink: 0;
    }
    .blue{
        border: 2px solid blue;
        color: blue;
        font-size: 24px;
    }
    .contentBox{
        margin-top: 15px;
    }
</style>
