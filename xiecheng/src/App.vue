<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-08 21:24:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-12 10:42:38
 -->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body, p, ul, ol, dl, dd, h1, h2, h3, h4, h5, h6, hr, td, input, textarea {
  margin: 0;
  padding: 0; }

ul, ol, li {
  list-style: none; }

a {
  text-decoration: none; }

img {
  border: none; }

body {
  font-family: "微软雅黑"; 
  background-color: #eff3f6;
  }
</style>
