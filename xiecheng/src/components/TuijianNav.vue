<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-11 14:57:29
 -->
<template>
    <div class="box">
        <ul>
            <li id='first' v-bind:style="shicolor">一日游</li>
            <li @click="iscolor()">团队游</li>
            <li @click="iscolor()">当地玩乐</li>
            <li @click="iscolor()">酒店+门票</li>
            <li @click="iscolor()">当地向导</li>
        </ul>
    </div>  
</template>

<script>

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
        currtype:''
    }
  },
  methods:{
      iscolor(){
          // this.li.style=shicolor;
          // console.log(typename);
          // this.currtype=typename;
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
    #first{
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
</style>
