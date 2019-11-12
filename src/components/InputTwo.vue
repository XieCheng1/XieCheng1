<!--
 * @Author: your name
 * @Date: 2019-11-08 20:59:55
 * @LastEditTime: 2019-11-11 11:37:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \老田二阶段e:\千锋学习\三阶段\xiangmu\xiechengapp\src\components\RegisterInput.vue
 -->
<template>
    <div class="box">
        <h2>设置密码</h2>
        <div class="centerBox">
            <li class="oneLi">
                <input type="button" value="请输入5-20个以字母开头、可带数字，字符">
            </li>
            <li class="twoLi">
                <input type="password" placeholder="密码" v-model="msg">
            </li>
            <el-button :plain="true" @click="hint()"><router-link to="/MyNoLogin">确认</router-link></el-button>
            <p>登录即代表您同意我们的 <a href=""> 服务协议</a> 和 <a href=""> 隐私政策 </a></p>
        </div>
    </div>
</template>
<script>
export default {
    name:"InputTwo",
    data(){
        return {
            msg:""
        }
    },
    methods:{
        open3() {
        this.$message({
          message: '请输入密码',
          type: 'warning'
        });
      },
       open4() {
        this.$message.error('请输入正确的密码');
      },
      hint:function(){
        var flagTel=false;
        //只能输入5-20个以字母开头、可带数字、“_”、“.”的字串
        var regName=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/; 
          if(this.msg == ""){
              this.open3();
          }else if(regName.test(this.msg)){
            //手机号
            flagTel=true;
	        
          }else if(!regName.test(this.msg)){
              var flagTel=false;
            this.open4();
          }
      }  
    }
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 3.89rem;
}
h2{
    display: inline-block;
    font-size: .25rem;
    width: 100%;
    text-align: center;
    margin-top: .5rem;
}
.centerBox{
    margin-top: .5rem;
}
.oneLi{
    width: 88%;
    margin: 0 auto;
    border-bottom: 1px solid rgb(228, 211, 211);
}
.oneLi input{
    line-height: .24rem;
    font-style: 16px;
    font-weight: 800;
    width: 100%;
    border: none;
    height: .58rem;
    background-color: #fff;
    outline:0; 
    text-align: left;
}
.twoLi{
    width: 88%;
    margin: 0 auto;
    border-bottom: 1px solid rgb(228, 215, 215);
}
.twoLi input{
    line-height: .24rem;
    font-style: 16px;
    font-weight: 800;
    width: 70%;
    border: none;
    height: .58rem;
    outline:0; 
}
span{
    color: #099FDE;
    font-size: 13px;
}
button{
    display: block;
    width: 90%;
    height: .44rem;
    margin: 0 auto;
    margin-top: .5rem;
    border-radius: .05rem;
    border: none;
    background-color: #ff9a14;
    font-size: 17px;
    color: #fff;
}
p{
    width: 100%;
    color: #999999;
    font-size: 12px;
    text-align: center;
    margin-top: .3rem;
}
</style>