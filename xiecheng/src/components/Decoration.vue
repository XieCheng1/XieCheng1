<!--
 * @Descripttion: "武夷山的描述"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-13 22:17:52
 -->
<template>
    <div class="box">
        <div id="top">
            <div id="wenzi">
                <h2>{{bba.sname}}</h2>
                <p v-html="bba.trait"></p>
            </div>
            <div id="pingf">
                <h2>{{bba.grad}}</h2><span>/5分</span>
            </div>
        </div> 
        <div id="bottom">
            <ul>
                <li>
                    <div id="left_decoration">
                        <p style="color:#b38843">
                            <span class="iconfont" >&#xe605;</span>
                            {{bba.trait}}
                        </p>
                    </div>
                    <div>
                        <i class=" el-icon-arrow-right"></i>
                    </div>
                </li>
                 <li>
                    <div id="left_decoration">
                        <p>     
                            <span class="iconfont">&#xe741;</span>
                            {{bba.site}}
                            </p>
                    </div>
                    <div>
                        <i class=" el-icon-arrow-right"></i>
                    </div>
                </li>
                 <li>
                    <div id="left_decoration">
                        <p>
                            <span class="iconfont" id="three">&#xe62d;</span>
                            {{bba.paimingThree}}
                        </p>
                    </div>
                    
                    <div id="yuDing">
                       <router-link to='/DataPage'> 
                            预订
                       </router-link>
                    </div>
                </li>
                  <li>
                    <div id="left_decoration">
                        <p id="shiLast">
                            <span class="iconfont" id="four">&#xe62a;</span>
                            {{bba.open}}
                        </p>
                    </div>
                    <div id="more">
                        更多详情
                    </div>
                </li>
            </ul>
        </div> 
        <div id="warns">
            <div>
                 <i class="el-icon-heavy-rain"></i>
                  <p>11.10日武夷山马拉松比赛封路通知</p>
                   
            </div>
        </div>
           
    </div>  
</template>

<script>

export default {
  name: 'Decoration',
  data () {
    return {
        bba:{}
    }
  },
  methods:{
     
  },
  created:function(){
      fetch("/api/particulars")
      .then(res=>{
          return res.json();
        //   console.log(res.json())
      })
      .then(data=>{
          let aaa=data[0];
          this.bba=aaa;
      })
      .catch(err=>{
          console.log(err);
      })
     
  }
}
</script>
<style scoped>
    .box{
        width: 95%;
        margin: 0 auto;
        border-radius: 20px;
        background-color: #fff;
    }
    #top{
        height: 94px;
    }
    #wenzi h2{
        line-height: 60px;
    }
    #wenzi h2{
        margin-left: -110px;
    }
    #top p{
        color: #0099f7; 
    }
    #wenzi{
        float: left;
    }
    #pingf{
        margin-top: 20px;
        float: right;
        text-align: center;
        /* background-color: rgb(223, 111, 130); */
    }
    #pingf span{
        /* margin-left: 90px; */
        margin-top: 30px;
    }
    #bottom{
        background-color:#fff;
    }
    li{
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ebebeb;
    }
    #bottom span{
        font-size: 30px;
    }
    #bottom p{
        font-weight: 600;
        font-size: 16px;
        display: inline-block;
    }
    #bottom #shiLast{
         width: 200px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    #yuDing{
        width: 80px;
        height: 40px;
        color: #fff;
        text-align: center;
        line-height: 40px;
        border-radius: 10px;
        margin-top: 10px;
        background-color: #ffb129;
    }
    #more{
        color: #0099f7;
        font-weight: 700;
    }
    #warns{
        width: 94%;
        height: 50px;
        background-color: #fff;
        margin: 0 auto;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    #warns div{
        color: #ffb129;
        line-height: 50px;
        /* margin-left: -164px; */
        font-size: 16px;
    }
    #warns p{
        display: inline-block;
    }
    #bottom #three{
        font-size: 18px;
    }
    #bottom #four{
        font-size: 24px;
    }
</style>
