<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-14 17:42:16
 -->
<template>
    <div id="box">
        <div class="box">
            <h2 style="float:left;margin-left:10px">使用日期</h2>
            <div id="dataBox">
                <div id="top">
                    <div> 
                        <h4>今天</h4>
                        <h4>{{str}}</h4>
                        <h4>不可订</h4>
                    </div>
                     <div>
                        <h4>明天</h4>
                        <h4>{{str1}}</h4>
                        <h3 style="color:rgb(238, 105, 105)"><span>￥</span>350</h3>
                    </div>
                     <div>
                        <h4>后天</h4>
                        <h4>{{str2}}</h4>
                        <h3 style="color:rgb(238, 105, 105)"><span>￥</span>360</h3>
                    </div>
                     <div>
                        <h4>更多<br>
                         日期></h4>
                    </div>
                </div>
            </div>
            <div id="zhe">
                <span>任性砍5折</span>
                <p>下单后邀好友砍5折，最高可返200元</p>
               
            </div>
        </div>  
        <div id="price">
            <ul>
                <li>
                    <div style="float:left;margin-left:-20px">
                        <h2 style="margin-left:-120px;">成人票</h2>
                        <span style="color:rgb(180, 155, 12);float:left;margin-top:15px;margin-left:20px">
                            <i style="font-size:20px;float:left" class="el-icon-warning"></i>
                            <p style="margin-left:30px;">有条件退</p>
                        </span>
                        <span style="color:green;float:left;margin-top:15px;margin-left:20px">
                            <i style="font-size:20px;float:left" class="el-icon-check"></i>
                            <p style="margin-left:30px;">入园保障</p>
                        </span>
                        <p style="line-height:50px;margin-left:-120px">
                            购买须知
                        </p>
                    </div>
                    <div id="right">
                        <h3><span style="font-size:23px">￥</span>360</h3>
                        <div id="shiRb">
                            <div id="reduce" @click="reduce1()">-</div>
                            <h2>{{num1}}</h2>
                            <div id="add" @click="add1()">+</div>
                        </div>                 
                    </div>
                </li>
                 <li >
                    <div style="float:left;">
                        <h2 style="line-height:100px">
                            儿童票
                        </h2>
                    </div>
                    <div id="right">
                        <h3><span style="font-size:23px">￥</span>180</h3>
                        <div id="shiRb">
                             <div id="reduce" @click="reduce2()">-</div>
                            <h2>{{num2}}</h2>
                            <div id="add" @click="add2()">+</div>
                        </div>                 
                    </div>
                </li>
                 <li >
                    <div style="float:left">
                        <h2 style="line-height:100px">
                            学生票
                        </h2>
                    </div>
                    <div id="right">
                        <h3><span style="font-size:23px">￥</span>360</h3>
                        <div id="shiRb">
                            <div id="reduce" @click="reduce3()">-</div>
                            <h2>{{num3}}</h2>
                            <div id="add" @click="add3()">+</div>
                        </div>                 
                    </div>
                </li>
            </ul>
        </div>
    </div>
   
</template>

<script>

export default {
  name: 'DataTop',
  data () {
    return {
      str:new Date().getMonth()+1+"-"+new Date().getDate(),  
      str1:new Date().getMonth()+1+"-"+(new Date().getDate()+1),  
      str2:new Date().getMonth()+1+"-"+(new Date().getDate()+2),  

      num1:1,
      num2:0,
      num3:0,
    }
  },
  methods:{
      
      reduce1(){
          if(this.num1==0){
              return;
          }
          this.num1--;
      },
      add1(){
          this.num1++;
      },
      reduce2(){
     if(this.num2==0){
        return;
     }
     this.num2--;
    },
    add2(){
        this.num2++;
    },
    reduce3(){
        if(this.num3==0){
            return;
        }
        this.num3--;
    },
    add3(){
        this.num3++;
    }

  },
  computed:{
      
  }
}
</script>
<style scoped>
    #box{
        background-color:#fff;
    }
    .box{
        /* width: 95%; */
        margin:0 auto;
        background-color: #fff;
        /* height: 280px; */
        padding-bottom: 20px;
    }
    li{
        width: 100%;
        border-top: 1px solid #999;
        /* margin-bottom: 10px; */
    }
    #dataBox{
        width: 95%;
        clear: both;
        margin: 10px auto;
        border-radius: 15px;
    }
    #top{
        display: flex;
        justify-content: space-around;
        /* float: left; */
    }
    #top div{
        width: 80px; 
        height: 66px;
        margin-top: 30px;
        margin-right: 20px;
        border-radius: 15px;
        background-color: rgb(236, 225, 225);
    }
    i{
        display: block;
    }    
    #zhe span{
        width: 70px;
        height: 25px;
        line-height: 25px;
        border:1px solid rgb(207, 179, 21);
        color: goldenrod;
    }
    #zhe p{
        display: inline;
    }
    #price{
        width: 95%;
        height: 330px;
        background-color: #fff;
        margin: 0px auto;
    }
    #price li{
        float: left;
    }
    #right{
        float: right;
        /* width: 160px;
        height: 100px; */
    }
    #right h3{
        color: rgb(238, 105, 105);
        font-size: 23px;
        margin-left: 60px;
    }
    #reduce,#add{
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 50%;
        font-size: 30px;
        border: 1px solid #999;
    }
    #shiRb{
        display: flex;
        margin-left: 60px;
        margin-top: 20px;
    }
     #shiRb h2{
         margin-left: 10px;
         margin-right: 10px;
     }
</style>
