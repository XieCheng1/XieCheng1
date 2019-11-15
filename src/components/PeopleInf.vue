<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-14 19:48:30
 -->
<template>
    <div id="box">
          <div class="box">
                <div id="title">
                    <h2>出行人信息</h2>
                    <b>需填写<span>1个</span>出行人信息</b>
                </div>
                <div id="yonghu">
                    <div id="first">某某人</div>
                    <div id="second">新增/更换></div>
                </div>
                <div id="yonghu">
                    <p>出行人</p>
                    <input v-model="peoplea" id="peoplea" type="text" > 
                    <i class="el-icon-edit"></i>
                </div>
                <div id="title" class="conent">
                    <h2 style="backgound:#fff">联系信息</h2>
                    <p>联系手机</p>
                    <input id="tel" v-model="tel" type="text" placeholder="接收确认短信">
                    <i class="el-icon-edit"></i>
                </div>
          </div> 
          <div class="money">
              <p style="float:left;color:red;line-height:70px">总额：￥<span style="font-size:24px">{{totalMoneys}}</span></p>
              <!-- <p style="color:blue">明细</p> -->
              <div id="go" @click="go()">去支付</div>
          </div>
    </div>
   
</template>

<script>

export default {
  name: 'PeopleInf',
  data () {
    return {
      totalMoneys:0,
      tel:"",
      peoplea:""
    }
  },
  methods:{
      go(){
          if(this.peoplea!="" && this.tel!=""){
              alert('祝你旅行愉快')
          }else{
              alert('请填写信息')
          }
          function tel(){
                var phreg=/^1[3|5|7|8|][0-9]{9}$/;
                    if(phreg.test(this.tel)){
                        
                    }else {
                        alert('请填写正确的手机号')
                    }
            } 
      }
  },
  computed:{
    //   totalMoney:function(){
            
    //   }
  }
}
</script>
<style scoped>
    #box{
        height: 460px;
        background-color: #fff;        
    }
    .box{
        width: 95%;
        margin: 0 auto;
    }
    #title {
        width: 100%;
        min-height: 60px;
        line-height: 60px;
    }
    #title h2{
        float: left;
    }
    #title b{
        display: block;
        margin-top: 20px;
    }
    #title b span{
        color: goldenrod;
    }
    #yonghu{
        height: 100px;
        line-height: 100px;
        border-top: 1px solid #999;
        background: #fff;
    }
    #yonghu #first{
        width: 100px;
        /* height: 50px; */
        line-height: 50px;
        margin-top: 20px;
        color: #fff;
        float: left;
        margin-right: 30px;
        font-size: 20px;
        background-color: rgb(84, 84, 212);
    }
    #yonghu #second{
         width: 100px;
        height: 50px;
        float: left;
        /* display: inline-block; */
        margin-top: 20px;
        line-height: 50px;
        color: rgb(84, 84, 212);
        border:1px solid rgb(84, 84, 212);
        font-size: 20px;
    }
    #yonghu p{
        font-size: 24px;
        float: left;
    }
    #yonghu i{
        float: right;
        font-size: 24px;
        margin-top: 30px;
     }
     #conent{
         border-bottom: 1px solid #999;
     }
    input{
        width: 230px;
         outline: 0;
         border: none;
         font-size: 16px;
     }
     .conent {
         margin-bottom: 73px;
         background-color: #fff;
     }
     .conent p{
        float: left;
        margin-top: 43px;
        margin-left: -92px;
     }
     .conent input{
         margin-top: 65px;
     }
     .conent i{
         font-size: 24px;
         color: blue;
     }
     .money{
         width: 100%;
         height: 70px;
         margin-top: 40px;
         background-color: #fff;
         position: fixed;
         bottom: 0px;
         z-index: 2;
     } 
     #go{
         width: 200px;
         height: 70px;
         line-height: 70px;
         font-size: 24px;
         color: #fff;
         background-color: gold;
         float: right;
     }
     .conent i{
         margin-right: -36px;
     }
</style>
