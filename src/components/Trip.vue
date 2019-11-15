<!--
 * @Author: yx
 * @Date: 2019-11-11 09:16:04
 * @LastEditors: yx
 * @LastEditTime: 2019-11-13 17:50:24
 * @Description: 行程
 -->


<template>
    <div class="trip">
       <div class="trTop">
           <span class="el-icon-location"> 西安站</span>
           <span>填写目的地/关键字</span>
       </div>
        <div class="trCon">
            <select>
                <option value="出行天数">出行天数(选填)</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <el-date-picker
                class="myData"
                v-model="value1"
                type="date"
                placeholder="出行日期(选填)">
            </el-date-picker>
            <!-- <span>出发日期(选填)</span> -->
            <!-- <span>到达日期(选填)</span><br> -->
        </div>
        <div class="trBot">
            <router-link to="/CustService"><input class="consulting" type="button" value="线路咨询"><span class="el-icon-headset"></span></router-link>
             <input type="button" value="搜索">
        </div>
    </div>  
</template>

<script>

export default {
  name: 'Trip',
  data () {
    return {
       pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
        value1: '',
        value2: '',
      
    }
  },
  methods:{
      
  }
}
</script>

<style scoped>
.trip{
    width: 83%;
    height: 1.2rem;
    background: #fff;
    border-radius: 0.06rem;
    margin: 0 auto;
    position: relative;
    margin-top: -7%;
    z-index: 10;
    box-shadow: 0rem 0rem 0.1rem 0.01rem #ccc;
    padding: 2.5% 5.5%;
}
.trip span{
    color: #bbb;
    
}
.trTop .el-icon-location{
    color: black;
}
.trTop {
    width: 100%;
    height: 0.38rem;
    line-height: 0.35rem;
    /* border-bottom: 1px solid #ccc; */
}

.trTop span:first-child{
    margin-right: 0.5rem;
}
/* 
.trCon span{
    width: 48%;
    height: 0.4rem;
    line-height: 0.4rem;
    display: inline-block
} */
.trCon {
    display: flex;
    justify-content: space-between;
}
.trip .trCon .myData{
    width: 48%;
    border: 0;
}
.trCon select{
    width: 45%;
    outline: none;
    font-size: 0.14rem;
    color: #bbb;
    text-indent: 0.18rem;
    background: #fff;
    border: 1px solid #ccc;
}
.trip input{
    border-radius: 0.04rem;
}
.trBot{
    position: relative;
    font-size: 0.18rem;
    margin-top: 0.08rem;
}
.trBot input{
    height: 0.35rem;
    outline:none;
}
.trBot .consulting{
    border: 1px solid #ccc;
    background: #fff;
    width: 38%;
}
.trBot input:last-child{
    border: 0;
    background: #fff;
    width: 58%;
    background-color: rgb(247, 145, 29);
    color: #fff;
    font-size: 0.16rem;
    margin-left: 0.07rem;
}
.trBot .el-icon-headset{
    position: absolute;
    left: 0.1rem;
    top: 0.09rem;
}
</style>
