<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-09 17:39:33
 -->
<template>
    <div class="box">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(obj,index) in objs" :key='index'>
                    <a :href="obj.href"><img :src="obj.src"></a>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
import swiper from 'swiper'
export default {
  name: 'Banner',
  data () {
    return {
      objs:[
          {
              src:'static/img/img1.jpg',
              href:"https://www.baidu.com"
          },
          {
              src:'static/img/img2.jpg',
              href:"https://www.baidu.com"
          }
      ]
    }
  },
  mounted(){
    var mySwiper = new Swiper ('.swiper-container',{
        autoplay:true,
        speed:300,
        grabCursor:true
    })  
  },
  methods:{
  }
}
</script>
<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
.swiper-container {
    width: 100%;
    height: 200px;
}  
img{
    width: 100%;
    height: 100%;
}
</style>
