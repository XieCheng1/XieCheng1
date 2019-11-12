<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-11 18:00:03
 -->
<template>
    <div class="box">
        <div id="top">
            <h3>发现精彩旅拍</h3>
            <div>
                <h4>综合</h4>
                <span>最新</span>
            </div>
        </div>
        <div id="zhuyao">
            <ul>
                <li>
                    <img :src="objs.pullsrc" alt="">
                    <p>{{objs.pullpa}}</p>
                    <span @click="icon" v-show="isShow" class="iconfont">&#xe608;</span>
                    <span @click="icon" v-show="!isShow" class="iconfont" style="color:rgb(230, 199, 23)">&#xe608;</span>
                </li>
                 <li>
                    <img :src="objs.pullsrc" alt="">
                    <p>{{objs.pullpa}}</p>
                    <span @click="icon" v-show="isShow" class="iconfont">&#xe608;</span>
                    <span @click="icon" v-show="!isShow" class="iconfont" style="color:rgb(230, 199, 23)">&#xe608;</span>
                </li>
                 <li>
                    <img :src="objs.pullsrc" alt="">
                    <p>{{objs.pullpa}}</p>
                    <span @click="icon" v-show="isShow" class="iconfont">&#xe608;</span>
                    <span @click="icon" v-show="!isShow" class="iconfont" style="color:rgb(230, 199, 23)">&#xe608;</span>
                </li>
                 <li>
                    <img :src="objs.pullsrc" alt="">
                    <p>{{objs.pullpa}}</p>
                    <span @click="icon" v-show="isShow" class="iconfont">&#xe608;</span>
                    <span @click="icon" v-show="!isShow" class="iconfont" style="color:rgb(230, 199, 23)">&#xe608;</span>
                </li>
            </ul>
        </div>
    </div>  
</template>

<script>

export default {
  name: 'PullPhoto',
  data () {
    return {
      isShow:true,
      objs:{
          
      }
    }
  },
  methods:{
      icon(){
            this.isShow = !this.isShow;
      }
  },
  created(){
    fetch('http://localhost:3000/Inplay')
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        this.objs=data[0];
        console.log(data[0])
    })
    .catch(err=>{
        console.log(err)
    })
  }
}
</script>
<style scoped>
   #top{
       display: flex;
   }
    #top h3{
        color: rgb(110, 104, 104);
    }
    #top  div{
        margin-left: 140px;
        font-size: 18px;
    }
     #top  div span{
         display: block;
         margin-top: -24px;
         margin-right: -110px;
     }
     #zhuyao{
         margin-top: 20px;
         width: 100%;
     }
     ul{
         display: flex;
         flex-wrap: wrap;
         justify-content: space-around;
     }
     li{
         width: 48%;
         margin-bottom: 90px;
     }
     img{
         width: 100%;
         height: 100%;
     }
     p{
         display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
     }
     li span{
         float: right;
         margin-right: 20px;
     }
</style>
