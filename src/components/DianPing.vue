<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-14 21:01:51
 -->
<template>
    <div class="box">
       <!-- <div id='title'>
           <p>{{objs.rank}}<span>{{objs.remark}}条点评</span></p>
         <div style="margin-top:10px;display:flex;height:40px;margin-left:20px;">
              <div class="txts">
                  {{objs.jingxuan}} 
              </div>
              <div class="txts" style="margin-left:30px">
                  {{objs.jingxuan}} 
              </div>
          </div> 
            
         <div style="margin-top:10px;display:flex;height:40px;margin-left:20px;">
              <div class="txts">
                  {{objs.jingxuan}} 
              </div>
              <div class="txts" style="margin-left:30px">
                  {{objs.jingxuan}} 
              </div>
          </div> 
       </div> -->
       <ul>
          <li v-for="(commen,index) in commens" :key="index">
              <div id="touxiang">
                  <div>
                    <img :src="commen.rename" alt="">
                    <span>{{commen.uname}}</span>
                  </div>   
              </div> 
              <div id="neirong">
                <h4>{{commen.rname}}</h4>
                <div>
                    <img :src="commen.rph1" alt="">
                    <img :src="commen.rph2" alt="">
                    <img :src="commen.rph3" alt="">
                </div>
              </div>
          </li>
       </ul>
       
    </div>  
</template>

<script>

export default {
  name: 'DianPing',
  data () {
    return {
       objs:{
         
       },
       commens:[
         
       ]
    }
  },
  methods:{
  
  },
  created(){
    fetch('/api/review')
    // fetch('/day566/part/one?pid=5',{
    //   method:"get"
    // })

    
    .then(res=>{
        return res.json()
    })
    .then(data=>{
        this.commens=data;
        console.log(this.commens);
        console.log(this.commens);
        console.log(this.commens);

        console.log(this.commens.length);
    })
    .catch(err=>{
      console.log(err);
    })
    fetch('/api/particulars')
    .then(res=>{
        return res.json()
    })
    .then(data=>{
      console.log(data)

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
     width: 31.5%;
     margin-right: 10px;
 }
</style>
