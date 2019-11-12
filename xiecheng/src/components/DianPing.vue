<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-12 10:47:03
 -->
<template>
    <div class="box">
       <div id='title'>
           <p>{{objs.pingfen}}分<span>{{objs.dianping}}条点评</span></p>
         <div style="margin-top:10px;display:flex;height:40px;">
              <div class="txts">
                  {{objs.txt}} {{objs.count}}
              </div>
              <div class="txts" style="margin-left:30px">
                  {{objs.txt}} {{objs.count}}
              </div>
          </div> 
            
         <div style="margin-top:10px;display:flex;height:40px;">
              <div class="txts">
                  {{objs.txt}} {{objs.count}}
              </div>
              <div class="txts" style="margin-left:30px">
                  {{objs.txt}} {{objs.count}}
              </div>
          </div> 
       </div>
       <div id="touxiang">
            <div>
              <img :src="objs.mgsrc" alt="">
              <span>流浪精灵</span>
            </div>   
       </div> 
         <div id="neirong">
            <h4>{{objs.pinglun}}</h4>
            <div>
                <img :src="objs.imgsrc" alt="">
                <img :src="objs.imgsrc" alt="">
                <img :src="objs.imgsrc" alt="">
            </div>
        </div>
    </div>  
</template>

<script>

export default {
  name: 'DianPing',
  data () {
    return {
       objs:{
         
       }
    }
  },
  methods:{
  
  },
  created(){
    fetch('http://localhost:3000/Pinglun')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        this.objs=data[0];
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
</script>
<style scoped>
  .box{
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
  }

  #title p{
      color:blue;
      /* float: left; */
      margin-left: -178px;
    }
  #title p span{
    color: #333;
    margin-left: 40px;
  }
  #title .txts{
    border-radius: 10px;
    line-height: 30px;
    border: 1px solid rgb(133, 131, 131);
    float: left;
  }
  #touxiang{
    width:100%;
    margin-top: 10px;
    display: flex;
  }
  #touxiang img{
    width: 50px;
    height: 50px;
    background-color: rgb(231, 145, 159);
    border-radius: 50%;
  }
  #touxiang span{
    line-height: 10px;
    vertical-align: top;
    margin-top: 30px;
    margin-left: 10px;
    line-height: 30px;
  }
  #neirong h4{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    font-weight: 400;
    font-size: 20px;
  }
  #neirong div{
    display: flex;
  }
   #neirong  img{
     width: 33%;
     margin-right: 10px;
 }
</style>
