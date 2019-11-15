<!--
 * @Author: yx
 * @Date: 2019-11-08 18:01:56
 * @LastEditors: yx
 * @LastEditTime: 2019-11-13 14:38:17
 * @Description: 
 -->
<template>
  <div id="app">
    <router-view/>
    <!-- <MyFooter></MyFooter> -->
  </div>
</template>

<script>
// import MyFooter from './components/MyFooter';
export default {
  name: 'App',
  components:{
    //  MyFooter
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
  height:100%;
}
body{
  font-size: 14px;
  height: 100%;
}
#app { 
  margin-top: 5px;
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
i{
  font-style: normal;
}
</style>
