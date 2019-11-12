<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-11 14:29:37
 -->
<template>
    <div id="box">
        <div>
            <div id="left">
                <ul>
                    <li>
                        <img :src="aab.obj" alt="">
                    </li>
                </ul>
            </div>
            <div id="right">
                <h3>{{aab.shih3ya}}</h3>
                <p id="one">{{aab.shiPingf}}</p>
                <p id="teo">立即确认</p>
                <div id="bottom">
                    <p>月销：{{aab.yueXiao}}份</p>
                    <span>￥<b>{{aab.money}}</b>起</span>
                </div>
            </div>
        </div>  
         <div style="margin-top:10px">
            <div id="left">
                <ul>
                    <li>
                        <img :src="aab.obj" alt="">
                    </li>
                </ul>
            </div>
            <div id="right">
                <h3>{{aab.shih3ya}}</h3>
                <p id="one">{{aab.shiPingf}}</p>
                <p id="teo">立即确认</p>
                <div id="bottom">
                    <p>月销：{{aab.yueXiao}}份</p>
                    <span>￥<b>{{aab.money}}</b>起</span>
                </div>
            </div>
        </div> 
        <div id="last">
            <p>查看全部</p>
        </div> 
    </div>  
</template>

<script>

export default {
  name: 'Tuijian',
  data () {
    return {
        aaa:{}
    }
  },
  methods:{
      
  },
  created(){
      fetch("http://localhost:3000/aaa")
      .then(res=>{
          return res.json();
      })
      .then(data=>{
          let aaa=data[0];
          this.aab=aaa;
      })
      .catch(err=>{
          console.log(err);
      })
  }
}
</script>
<style scoped>
        #box{
            display: flex;
            justify-content: space-around;
        }

        #left{
            width: 30%;
        }
        #left img{
            width: 100%;
            height: 100%;
            /* float: left; */
            border-radius: 10px;
        }
        #right{
            width: 65%;
            margin-top: -130px;
            float: right;
            /* display: inline-block; */
            /* flex-grow: 1;
            margin-left: 5px; */
        }
        #right h3{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
        #right #one{
            color: #0099f7;
            float: left;
            text-indent: 7px;
        }
        #right #teo{
            clear: both;
            width: 85px;
            height: 30px;
            line-height: 30px;
            color: #0098f7;
            border: 1px solid #67bdf3;
        }
        #bottom p{
            float: left;
            margin-top: 10px;
        }
        #bottom b{
            font-size: 30px;
            color: rgb(223, 53, 53);
        }
        #last{
            width: 95%;
            height: 40px;
            margin: 10px auto;
            border: 1px solid rgb(177, 166, 166);
        }
        #last p{
            line-height: 40px;
            text-align: center;
            color: #0098f7;
            font-size: 18px;
        }
</style>
