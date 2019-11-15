<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-14 17:53:22
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
    </div>
   
</template>

<script>

export default {
  name: 'NewDatatop',
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
        margin-left: -53px;
        line-height: 25px;
        border:1px solid rgb(207, 179, 21);
        color: goldenrod;
    }
    #zhe p{
        display: inline;
    }
    
</style>
