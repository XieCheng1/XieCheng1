<!--
 * @Descripttion: "会儿话费"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-09 20:23:23
 -->
<template>
    <div class="box">
        <div id="titles">
            <h2>{{title}}</h2>
        </div>
    </div>
</template>

<script>

export default {
  name: 'fatherToChild',
  props:['title'],
  data () {
    return {
      
    }
  },
  methods:{
     
  }
}
</script>
<style scoped>
    #titles{
        width: 95%;
        margin: 0 auto;
        /* background-color: rgb(148, 69, 82); */
        height: 40px;
    }
    h2{
        float: left
    }
</style>
