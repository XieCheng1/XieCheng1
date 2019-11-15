<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-09 17:09:32
 -->
<template>
    <div class="box">
        <!--左箭头--> 
        <i id="shiback" class="el-icon-arrow-left" @click='back()'></i>
        <div rightIcon>
            <span id="shouCang"  class="iconfont" v-show="isShow" @click="dianShow()">&#xe655;</span>
            <span id="shouCang"  class="iconfont" v-show="!isShow" @click="dianShow()" style="color:#ff8516">&#xe606;</span>
            <span id="shouCang"  class="iconfont">&#xe659;</span>
            <i  id="shiback2" class="el-icon-minus"></i>
     </div>

    </div>  
</template>

<script>

export default {
  name: 'GoBack',
  data () {
    return {
      isShow:true
    }
  },
  methods:{
      back(){
          this.$router.go(-1);
      },
      dianShow(){
            this.isShow = !this.isShow;
      }
  }
}
</script>
<style scoped>
.box{
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
#shiback{
    font-size: 30px;
}
#shouCang{
    font-size: 30px;
    margin-left: 20px;
}
#shiback2{
    margin-left: 20px;
}
</style>
