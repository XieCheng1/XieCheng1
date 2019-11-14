<!--
 * @Descripttion: "底部"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-13 16:15:31
 -->
<template>
    <div class="box">
        <div id='shitu'>
            <span class="iconfont">&#xe66d;</span>
             <p>加入行程</p>
        </div>
        <div id='shitu'>
            <router-link to='/PhotoPage'><span class="iconfont">&#xe620;</span>
                <p>发旅拍</p>
            </router-link>
        </div>
        <div id='shitu'>
            <span class="iconfont">&#xe66c;</span>
             <p>写点评</p>
        </div>
        <div id='shitu'>
            <span class="iconfont">&#xe741;</span>
             <p>打卡</p>
        </div>

    </div>  
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
      
    }
  },
  methods:{
     
  }
}
</script>
<style scoped>
.box{
    height: 60px;
    background-color:#fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
span{
    font-size: 30px;
}
#shitu:hover{
    color: blue;
}
</style>
