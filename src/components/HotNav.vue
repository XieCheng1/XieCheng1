<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-14 16:51:42
 -->
<template>
    <div class="box">
        <ul>
            <li :class="isactive==index?'blue':''"  @click="clk(index)" v-for="(item,index) in lis"  :key="index">{{item.liname}}</li>
        </ul>
    </div>  
</template>

<script>

export default {
  name: 'HotNav',
  data () {
    return {
        lis:[
            {"liname":"推荐"},
            {"liname":"周边"},
            {"liname":"立冬好去处"},
            {"liname":"泰国水灯节"},
            {"liname":"秋日旅行地"},
            {"liname":"3000出趟国"},
            {"liname":"视频"}
        ],  
        isactive:0
      }
  },
  methods:{
        clk(index){
            this.isactive=index;
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
    li{
        height: 35px;
        line-height: 35px;
        margin-right:10px ;
        flex-shrink: 0;
    }
    .blue{
        color: blue;
        font-size: 24px;
    }
    
</style>
