<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-11 16:53:39
 -->
<template>
    <div class="box">
        <ul>
            <li id="first">推荐</li>
            <li>周边</li>
            <li>立冬好去处</li>
            <li>泰国水灯节</li>
            <li>秋日旅行地</li>
            <li>3000出趟国</li>
            <li>视频</li>
        </ul>
    </div>  
</template>

<script>

export default {
  name: 'HotNav',
  data () {
    return {
    
      }
  },
  methods:{
      
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
        margin-left: 200px;
    }
    li{
        height: 35px;
        line-height: 35px;
        margin-right:20px ;
        flex-shrink: 0;
    }
</style>
