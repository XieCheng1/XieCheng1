<!--
 * @Descripttion: "会儿话费"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-13 23:24:58
 -->
<template>
    <div class="boxs">
        <div id="titles">
            <h3>武夷山主景区3日联票+观光车+竹筏票</h3>
            <div>
                <p>  . 优特人群：儿童、学生、老人</p>
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>           
        <el-collapse  @change="handleChange">
            <el-collapse-item title="成人票" name="1">
                <div><h3>官方推荐，出票保证</h3></div>
                    <div style="line-height=35px;">
                        <p style="color:#0098f7;margin-left:-160px">最早可订11月11日票 3天有效期</p>
                        <i class="el-icon-warning-outline" style="color:rgb(241, 208, 20);margin-left:-273px">   有条件退</i><span style="color:#0098f7;margin-left:-292px;">无需取票</span>
                        <p style="margin-left:-226px">已售{{objs.startprice}}+| 购买须知></p>   
                    </div>
            </el-collapse-item>
  <el-collapse-item title="儿童票" name="2">
    <div>儿童票</div>
  </el-collapse-item>
  <el-collapse-item title="老人票" name="3">
    <div>老人票</div>
  </el-collapse-item>
  <el-collapse-item title="学生票" name="4">
    <div>学生票</div>
    
  </el-collapse-item>
</el-collapse>
   </div> 
</template>

<script>

export default {
  name: 'traffic',
  data () {
    return {
      yangshi:`
        margin-left:10px;
        background:white;
      `,
      objs:{
        
      }
    }
  },
  methods:{
      handleChange(val) {
        console.log(val);
      }
  },
  created(){
    fetch('/api/particulars')
    .then(res=>{
      return res.json();
    })
    .then(data=>{
        this.objs=data[0];
        console.log(this.objs)
    })
  }
}
</script>
<style scoped>
    #boxs{
    width: 95%;
    height: 200px;
    }
   h3{
       line-height: 40px;
       width: 88%;
   }
   i{
       display: block;
   }
   #titles div{
       width: 95%;
       height: 50px;
       margin: 0 auto;
       background-color: rgb(255, 251, 251);
   }
   #titles p{
       text-indent: -126px;
       line-height: 50px;
   }
    #titles  i{ 
        margin-right:20px;   
        float: right;
        margin-top: -50px;
        margin-right: 4px;
        line-height: 50px;

    }


 
</style>
